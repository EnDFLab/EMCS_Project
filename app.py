from flask import Flask, jsonify
from flask_cors import CORS
from threading import Thread, Timer
import paho.mqtt.client as mqtt
import json
import pytz
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MQTT Configuration
broker_address = "mqtt.iammeter.com"
broker_port = 1883
username = "karuna"
password = "232794"

# Meter indices
PHYSICS = 0
BIOTECH = 1
MANAGEMENT = 2
CIVIL = 3
ELECTRICAL = 4
BOYSHOSTEL = 5
TRANSFORMER = 6  # Added transformer index

# Topic configuration
Topic = {
    PHYSICS: "device/CD0FF6AB/realtime",
    BIOTECH: "device/57DB095D/realtime",
    MANAGEMENT: "device/8FA834AC/realtime",
    CIVIL: "device/DAD94549/realtime",
    ELECTRICAL: "device/C249361B/realtime",
    BOYSHOSTEL: "device/D4C3566B/realtime",  # Example boys hostel device ID
    TRANSFORMER: "device/F51C3384/realtime"  # Added transformer topic
}

# Data storage with automatic clearing
meter_data = {
    PHYSICS: [],
    BIOTECH: [],
    MANAGEMENT: [],
    CIVIL: [],
    ELECTRICAL: [],
    BOYSHOSTEL: [],
    TRANSFORMER: []  # Added transformer data storage
}

# Nepali timezone setup
nepali_tz = pytz.timezone("Asia/Kathmandu")

def clear_meter_data(meter_id):
    """Clear data for a specific meter every 12 hours"""
    meter_data[meter_id].clear()
    Timer(43200, clear_meter_data, args=[meter_id]).start()

def on_message(client, userdata, message):
    try:
        payload = json.loads(message.payload.decode("utf-8"))
        phase_data = []
        
        for phase in payload['Datas']:
            phase_info = {
                "Voltage": phase[0],
                "Current": phase[1],
                "Active_Power": phase[2],
                "Forward_Energy": phase[3],
                "Frequency": phase[5],
                "Power_Factor": phase[6]
            }
            phase_data.append(phase_info)

        total_power = sum(float(p[2]) for p in payload['Datas'][:3])
        nepali_time = datetime.now(nepali_tz).strftime("%Y-%m-%d %H:%M:%S")

        for meter, topic in Topic.items():
            if message.topic == topic:
                meter_data[meter].append({
                    "total_power": total_power,
                    "phase_data": phase_data,
                    "received_at_nepali_time": nepali_time
                })
                break

    except Exception as e:
        print(f"Error processing message: {e}")

# MQTT Client Setup
client = mqtt.Client()
client.username_pw_set(username, password)
client.on_message = on_message
client.connect(broker_address, broker_port)

# Subscribe to all topics
for topic in Topic.values():
    client.subscribe(topic)

# Start MQTT thread
mqtt_thread = Thread(target=client.loop_forever)
mqtt_thread.daemon = True
mqtt_thread.start()

# API Endpoints
@app.route("/api/physics-data", methods=["GET"])
def get_physics_data():
    return jsonify(meter_data[PHYSICS])

@app.route("/api/biotech-data", methods=["GET"])
def get_biotech_data():
    return jsonify(meter_data[BIOTECH])

@app.route("/api/management-data", methods=["GET"])
def get_management_data():
    return jsonify(meter_data[MANAGEMENT])

@app.route("/api/civil-data", methods=["GET"])
def get_civil_data():
    return jsonify(meter_data[CIVIL])

@app.route("/api/electrical-data", methods=["GET"])
def get_electrical_data():
    return jsonify(meter_data[ELECTRICAL])

@app.route("/api/boyshostel-data", methods=["GET"])
def get_boyshostel_data():
    return jsonify(meter_data[BOYSHOSTEL])

@app.route("/api/transformer-data", methods=["GET"])  # Added transformer endpoint
def get_transformer_data():
    return jsonify(meter_data[TRANSFORMER])

# Initialize 12-hour clearing for all meters
for meter_id in meter_data.keys():
    clear_meter_data(meter_id)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
