import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Sidebar from "../partials/Sidebar";
import Home from "./Home";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Datepicker from "../partials/actions/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import Maps from "../components/Map";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <SideBar />
      <div className="content-container bg-white">
        <Header />
        <div className="mt-16 mx-24 ">
          <div className="flex h-screen overflow-hidden">

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

              <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto z-0" >
                  {/* Welcome banner */}
                  <WelcomeBanner />

                  {/* Dashboard actions */}
                  <div className="sm:flex sm:justify-between sm:items-center mb-12">
                    {/* Right: Actions */}
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                      <Datepicker />
                      {/* Add view button */}
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-12 gap-6 mb-14">
                    {/* Line chart (Acme Plus) */}
                    <DashboardCard01 />

                    {/* Line chart (Real Time Value) */}
                    <DashboardCard05 />
                    <Maps />
                    {/* Doughnut chart (Top Countries) */}
                    <DashboardCard06 />

                    {/* Line chart (Sales Over Time) */}
                    <DashboardCard08 />
                    
                    {/* Stacked bar chart (Sales VS Refunds) */}
                    {/* Card (Customers) */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
