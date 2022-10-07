import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Analyze from './pages/Analyze'
import Console from "./pages/Console";
import Documentation from "./pages/Documentation";
import FlowData from "./pages/FlowData";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn"
import AddHoneypot from "./pages/AddHoneypot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analyze-ml" element={<Analyze />} />
        <Route path="/console" element={<Console />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/flowdata" element={<FlowData />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/analyze-ml/predict" element={<SignIn />} />
        <Route path="/analyze-ml/generate" element={<SignIn />} />
        <Route path="*" element={<Dashboard/>} />
        <Route path="/add" element={<AddHoneypot/>} />
      </Routes>
    </Router>
  );
}

export default App;
