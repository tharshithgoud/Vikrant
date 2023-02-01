import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { IoMdShareAlt } from "react-icons/io";
const Console = () => {
  function buttonC(){
    alert("Unable to Connect to Server currently!! Check the server and try again by Opening the port 5052")
  }

  return (
    <div className="flex" >
      <SideBar />
      <div className="content-container">
        <Header />
        <div className="mt-16 mx-24 ">
          <div className="flex h-screen overflow-hidden">

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

              <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto z-0 my-24 text-center" >
                  {/* Welcome banner */}
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={buttonC}>
                    <div className="grid">
                      <div className="mx-1 px-0  col">
                        Open Console in New Window
                      </div>
                      {/* <div className="mx-0 px-0 col">
                        <IoMdShareAlt />
                      </div> */}


                    </div>


                  </button>

                  {/* Dashboard actions */}
                  <div className="sm:flex sm:justify-between sm:items-center mb-12">
                    {/* Right: Actions */}
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                      {/* Add view button */}
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-12 gap-6 mb-14">
                    {/* Line chart (Acme Plus) */}


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
};

export default Console;
