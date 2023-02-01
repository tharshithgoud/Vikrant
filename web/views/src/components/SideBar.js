import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { BsTerminalFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { GiCyberEye } from "react-icons/gi";


function SideBar({ load }) {
  return (
    <div
      className={`sticky top-0 left-0 h-screen w-16
      m-0 flex flex-col bg-gray-900 text-white shadow-lg`}
    >
      {load ? <PuffLoader color="yellow" loading /> : <SideBarIcon icon={<FaRegDotCircle size="40" />} />}
      <Link to="/home">
        <SideBarIcon icon={<HiHome size="38" />} text="Home" />
      </Link>
      <Link to="/about">
        <SideBarIcon icon={<BiInfoCircle size="38" />} text="About" />
      </Link>
      <Link to="/dashboard">
        <SideBarIcon icon={<AiOutlineDashboard size="38" />} text="Dashboard" />
      </Link>
      <Link to="/flowdata">
        <SideBarIcon icon={<ImDatabase size="30" />} text="Flow Data" />
      </Link>
      <Link to="/console">
        <SideBarIcon icon={<BsTerminalFill size="30" />} text="Console" />
      </Link>
      <Link to="/analyze-ml">
        <SideBarIcon icon={<IoMdAnalytics size="30" />} text="Analyze" />
      </Link>
      <Link to="/IDS">
        <SideBarIcon icon={<GiCyberEye size="38" />} text="Threat Intel" />
      </Link>
      <Link to="/settings">
        <SideBarIcon icon={<RiSettings3Fill size="38" />} text="Settings" />
      </Link>
    </div>
  );
}
const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group cursor-pointer">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
