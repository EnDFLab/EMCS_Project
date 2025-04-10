import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Visualize from "./pages/Visualize";
import Physics from "./pages/Visualize/Physics";
import Bio from "./pages/Visualize/Bio";
import Transformer from "./pages/Visualize/Transformer";
import Civil from "./pages/Visualize/Civil";
import Management from "./pages/Visualize/Management";
import Electrical from "./pages/Visualize/Electrical";
import Hostel from "./pages/Visualize/Hostel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />

        {/* Nested Routes inside Visualize */}
        <Route path="/visualize" element={<Visualize />}>
          {/* Redirect /visualize to /visualize/physics */}
          <Route index element={<Navigate to="physics" replace />} />
          <Route path="physics" element={<Physics />} />
          <Route path="bio" element={<Bio />} />
          <Route path="transformer" element={<Transformer />} />
          <Route path="civil" element={<Civil />} />
          <Route path="management" element={<Management />} />
          <Route path="electrical" element={<Electrical />} />
          <Route path="hostel" element={<Hostel />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
