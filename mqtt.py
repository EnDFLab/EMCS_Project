import paho.mqtt.client as mqtt
import json

broker_address = "mqtt.iammeter.com"  # MQTT broker address 
broker_port = 1883  # Default MQTT port
username = "karuna"
password = "232794"

TOTAL_BLOCKS = 5
PHYSICS = 0
BIOTECH = 1
MANAGEMENT = 2
CIVIL = 3
ELECTRICAL = 4
TRANSFORMER = 5


# Topics to subscribe to, for each meter
Topic = {PHYSICS: "device/CD0FF6AB/realtime",
          BIOTECH: "device/57DB095D/realtime",
          MANAGEMENT: "device/8FA834AC/realtime",
          CIVIL: "device/DAD94549/realtime",
          ELECTRICAL: "device/C249361B/realtime",
          TRANSFORMER: "device/F51C3384/realtime"}

def on_message(client, userdata, message):
    # decode the message into a python string and then convert to a dictionary  
    Payload_str = message.payload.decode("utf-8")
    payload_dict = json.loads(Payload_str)

    # get the active powers of all three phases
    pa = float(payload_dict['Datas'][0][2])
    pb = float(payload_dict['Datas'][1][2])
    pc = float(payload_dict['Datas'][2][2])
    total_power = int(pa+pb+pc)

    if message.topic == Topic[TRANSFORMER]:
        transformer_meter_total_power = total_power
        print(f"got message from transformer: {payload_dict}")

    # elif message.topic == Topic[BIOTECH]:
    #     biotech_meter_total_power = total_power
    #     print(f"got message from biotech, power = {total_power}")


# Create MQTT client instance
client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)

# Set username and password for authentication
client.username_pw_set(username, password)

# Assign callback function to handle incoming messages
client.on_message = on_message

# Connect to MQTT broker
client.connect(broker_address, broker_port)

# Subscribe to the topics
#client.subscribe(Topic[PHYSICS])
client.subscribe(Topic[TRANSFORMER])

# Loop to maintain MQTT connection and process incoming messages
client.loop_forever()