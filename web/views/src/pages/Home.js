import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiProcessor } from "react-icons/gi";
import { FaMemory } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";


import { Link } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Home() {
  const [hidden, setHidden] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [ddos, setDdos] = useState(90);
  const [adb, setAdb] = useState(false);
  async function delelteCard() {
    setShowModal(true);
    setAdb(true)
    await sleep(10000);
    setHidden("hidden");
    setAdb(false)
    alert("Server Error")

  }
  const [mem, setMem] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3002/mem")
      .then((response) => response.json())
      .then((data) => setMem(100 - (data.free / data.total) * 100));
  }, []);
  const [cpu, setcpu] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3002/processor")
      .then((response) => response.json())
      .then((data) => setcpu(data.total));
  }, []);
  return (
    <>
      <div className="flex">
        <SideBar load={adb} />
        <div className="content-container bg-white">
          <Header />
          <div className="mt-16 ">
            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center">
                  <div
                    class="p-8 bg-green-600 border shadow-xl rounded-xl w-80  mt-6"
                    href=""
                  >
                    <AiOutlineCloudServer size="60" />
                    <h3 class="mt-3 text-2xl font-bold text-white">
                      Server Status
                    </h3>

                    <p class="mt-4 text-md text-gray-100">Online</p>
                  </div>
                  <div
                    class="p-8 bg-blue-600 border shadow-xl rounded-xl w-80  mt-6"
                    href=""
                  >
                    <GiProcessor size="60" />
                    <h3 class="mt-3 text-2xl font-bold text-white">
                      CPU Usage
                    </h3>

                    <div class="mt-4 ">
                      <p class="text-gray-900">{cpu}%</p>
                      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div class="bg-white w-2/3 h-full rounded-lg shadow-md"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="p-8 bg-red-600 border shadow-xl rounded-xl w-80 mt-6"
                    href=""
                  >
                    <FaMemory size="60" />
                    <h3 class="mt-3 text-2xl font-bold text-white">
                      RAM usage
                    </h3>
                    <div class="mt-4 ">
                      <p class="text-gray-900"> {mem.toFixed(2)}%</p>
                      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div class="bg-white w-1/2 h-full rounded-lg shadow-md"></div>
                      </div>
                    </div>
                    <p class="mt-4 text-md text-gray-100"></p>
                  </div>
                </div>

                <Flickity
                  className={"carousel d-lg-none d-xl-none mt-20"} // default ''
                  elementType={"div"} // default 'div'
                  disableImagesLoaded={false} // default false
                  reloadOnUpdate // default false
                  static // default false
                >
                  <div class="bg-yellow-500 p-10 rounded-lg shadow-md mx-5">
                    <div class="flex justify-between items-center">
                      <h1 class="text-xl font-bold">Ddospot</h1>
                      <button onClick={delelteCard} class="flex items-center justify-center text-xl font-medium rounded-full px-4 py-1 space-x-1 border-1 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                        <RiDeleteBin5Fill />
                      </button>
                    </div>

                    <div class="mt-4 mb-10">
                      <p class="text-gray-900">{"Attacks: " + ddos + "%"}</p>
                      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div class="bg-white w-5/6 h-full rounded-lg"></div>
                      </div>
                    </div>
                    <h3 class="text-xs uppercase">Honeypot Type</h3>
                    <h2 class="tracking-wide">
                      High Interaction
                      <br />
                      (NTP DNS)
                    </h2>
                    <Link to="/ddospot">
                      <button class="bg-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75" >
                        View More
                      </button>
                    </Link>
                  </div>
                  <div class="bg-yellow-500 p-10 rounded-lg shadow-md mx-5">
                    <div class="flex justify-between items-center">
                      <h1 class="text-xl font-bold">ADBHoney</h1>
                      <button onClick={delelteCard} class="flex items-center justify-center text-xl font-medium rounded-full px-4 py-1 space-x-1 border-1 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                        <RiDeleteBin5Fill />
                      </button>
                    </div>

                    <div class="mt-4 mb-10">
                      <p class="text-gray-900">{"Attacks: " + 10 + "%"}</p>
                      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div class="bg-white w-1/6 h-full rounded-lg"></div>
                      </div>
                    </div>
                    <h3 class="text-xs uppercase">Honeypot Type</h3>
                    <h2 class="tracking-wide">
                      Medium Interaction
                      <br />
                      (Android)
                    </h2>
                    <Link to = "/adb">
                    <button class="bg-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75" >
                      View More
                    </button>
                    </Link>
              


                  </div>


                  <Link to="/add">
                    <div class="bg-white p-10 rounded-lg shadow-md mx-5 w-80 h-80">
                      <h1 class="text-xl font-bold">Add Honeypot</h1>
                      <div className="text-gray-500 mx-20 mt-16">
                        <BsPlusCircle size="60" />
                      </div>
                    </div>
                  </Link>
                </Flickity>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Are You Sure Want to Delete the Honeypot ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Once Deleted it Can't be retrieved and all the Data will
                      be lost
                    </p>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-yellow-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Home;
