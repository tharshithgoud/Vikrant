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
import Ntpot from "./components/honeypot/Ntpot.js";
import PredictCic from "./pages/predictcic";
import Generate from "./pages/Generate";
import Signout from "./pages/Signout";
import NTPOT from "./components/NTPOT";
import ADB from "./components/ADB";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();


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
        <Route path="/signout" element={<Signout />} />
        <Route path="/analyze-ml/predict" element={<SignIn />} />
        <Route path="/analyze-ml/generate" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
        <Route path="/add" element={<AddHoneypot/>} />
        <Route path="/ntpot" element={<Ntpot />} />
        <Route path="/predict" element={<PredictCic />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/ddospot" element={<NTPOT />} />
        <Route path="/adb" element={<ADB />} />
      </Routes>
    </Router>
  );
}

export default App;
