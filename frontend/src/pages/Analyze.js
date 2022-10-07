import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {BiAnalyse} from "react-icons/bi"
import {TbDeviceAnalytics} from "react-icons/tb"

function Analyze() {
  return (
    <div className="flex">
      <SideBar />
      <div className="content-container bg-white">
        <Header />
        <div className="mt-16 ">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-slate-200">
              <div class="flex items-center flex-col min-h-screen bg-slate-200 mt-10">
                <div class="break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-yellow-500 text-white">
                  <span class="uppercase text-xs text-black font-bold">
                    Completely Customized
                  </span>
                  <div class="flex flex-row items-center space-x-3">
                    <BiAnalyse size = "60"/>
                    <span class="text-base font-medium">
                      Generate new Model with collected data
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span>Choose any Honeypot or Attribute</span>
                    <button class="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black">
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h13M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-9 break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white">
                  <div class="flex items-center justify-between font-medium">
                    <span class="uppercase text-xs text-yellow-500">
                      Famous CIC Dataset ML Models
                    </span>
                  </div>
                  <div class="flex flex-row items-center space-x-3">
                  <TbDeviceAnalytics  size="40"/>
                    <span class="text-base font-medium">
                      Predict output for your flow data
                    </span>
                  </div>
              
                  <div class="flex justify-between items-center">
                  <div>Upload CSV
                  </div>
                    <button class="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h13M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyze;
