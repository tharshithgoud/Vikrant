import React from "react";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { BsTerminalFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import { HiDocumentText, HiMenu, HiHome } from "react-icons/hi";

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`sticky top-0 left-0 h-screen w-16
      m-0 flex flex-col bg-gray-900 text-white shadow-lg`}
    >
      <SideBarIcon icon={<HiMenu size="38" />} text="Menu" />
      <SideBarIcon icon={<HiHome size="38" />} text="Home" />
      <SideBarIcon icon={<BiInfoCircle size="38" />} text="About" />
      <SideBarIcon icon={<AiOutlineDashboard size="38" />} text="Dashboard" />
      <SideBarIcon icon={<ImDatabase size="30" />} text="Flow Data" />
      <SideBarIcon icon={<BsTerminalFill size="30" />} text="Console" />
      <SideBarIcon icon={<IoMdAnalytics size="30" />} text="Analyze" />
      <SideBarIcon icon={<HiDocumentText size="38" />} text="Documentation" />
      <SideBarIcon icon={<RiSettings3Fill size="38" />} text="Settings" />
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
