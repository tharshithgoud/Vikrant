import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="content-container bg-white">
        <Header />
        <div className="mt-16 mx-24 ">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <a
                class="p-8 bg-green-600 border shadow-xl rounded-xl w-80 mt-6 mx-24"
                href=""
              >
                <AiOutlineCloudServer size="60" />
                <h3 class="mt-3 text-2xl font-bold text-white">
                  Server Status
                </h3>

                <p class="mt-4 text-md text-gray-100">Online</p>
              </a>

              <body class=" flex justify-center items-center mt-20">
                <div class="bg-yellow-500 p-10 rounded-lg shadow-lg shadow-inner mx-5">
                  <h1 class="text-xl font-bold">Ddospot</h1>
                  <div class="mt-4 mb-10">
                    <p class="text-gray-900">Attacks: 66%</p>
                    <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                      <div class="bg-white w-2/3 h-full rounded-lg"></div>
                    </div>
                  </div>
                  <h3 class="text-xs uppercase">Honeypot Type</h3>
                  <h2 class="tracking-wide">
                    High Interaction
                    <br />
                    (NTP DNS)
                  </h2>
                  <button class="bg-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
                    View More
                  </button>
                </div>
                <div class="bg-yellow-500 p-10 rounded-lg shadow-md mx-5">
                  <h1 class="text-xl font-bold">Dionea</h1>
                  <div class="mt-4 mb-10">
                    <p class="text-gray-900">Attacks: 25%</p>
                    <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                      <div class="bg-white w-1/4 h-full rounded-lg shadow-md"></div>
                    </div>
                  </div>
                  <h3 class="text-xs uppercase">Honeypot Type</h3>
                  <h2 class="tracking-wide">
                    High Interaction
                    <br />
                    (FTP HTTP MYSQL)
                  </h2>
                  <button class="bg-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
                    View More
                  </button>
                </div>

                <div class="bg-yellow-500 p-10 rounded-lg shadow-md mx-5">
                  <h1 class="text-xl font-bold">Deliah</h1>
                  <div class="mt-4 mb-10">
                    <p class="text-gray-900">Attacks: 9%</p>
                    <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                      <div class="bg-white w-9 h-full rounded-lg shadow-md"></div>
                    </div>
                  </div>
                  <h3 class="text-xs uppercase">Honeypot Type</h3>
                  <h2 class="tracking-wide">
                    Medium Interaction
                    <br />
                    (ElasticSearch)
                  </h2>
                  <button class="bg-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
                    View More
                  </button>
                </div>
                <div class="bg-white p-10 rounded-lg shadow-md mx-5 w-80 h-80">
                  <h1 class="text-xl font-bold">Add Honeypot</h1>
                  <div className="text-gray-500 mx-20 mt-16">
                    <BsPlusCircle size="60" />
                  </div>
                </div>
              </body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
