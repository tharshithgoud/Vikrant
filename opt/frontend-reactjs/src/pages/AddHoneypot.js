import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
function AddHoneypot() {
  return (
    <div className="flex">
      <SideBar />
      <div className="content-container bg-white">
        <Header />
      
        <div className="mt-16 mx-24 ">
        <h1 className="text-2xl text-center font-bold pb-5">
                    Under Development, Will be rolled out soon!!
                  </h1>
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div>
                <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-14 px-12 lg:px-24 shadow-xl mb-24 mt-5 rounded-3xl">
                  <h1 className="text-2xl text-center font-bold pb-5">
                    ADD HONEYPOT
                  </h1>
                  <form>
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col rounded-2xl">
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="company"
                          >
                            Honeypot Name
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="company"
                            type="text"
                            placeholder="vikrant"
                          />
                        </div>
                        <div class="md:w-1/2 px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="title"
                          >
                            Honeypot Type
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="title"
                            type="text"
                            placeholder="High Interaction"
                          />
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Honeypot Services
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="application-link"
                            type="text"
                            placeholder="DNS SSH FTP"
                          />
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            GIT Link
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="application-link"
                            type="text"
                            placeholder="https://github.com/...."
                          />
                        </div>
                      </div>
                      <div class="flex ">
                        <div>
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Database Type
                          </label>
                          <div class="form-check ml-4 mt-3">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault1"
                            >
                              Static
                            </label>
                          </div>
                          <div class="form-check ml-4">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault2"
                            >
                              Server
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="flex mt-6">
                        <div>
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Contains multiple tables/files
                          </label>
                          <div class="form-check ml-4 mt-3">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault5"
                              id="flexRadioDefault3"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault3"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="form-check ml-4">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault5"
                              id="flexRadioDefault4"
                              checked
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault4"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-5 mt-6">
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Database port/Location
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="application-link"
                            type="text"
                            placeholder="123 or ddospot/db"
                          />
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-5">
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Any other ports to open (optional)
                          </label>
                          <input
                            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="application-link"
                            type="text"
                            placeholder="21, 53, 3359,....etc"
                          />
                        </div>
                      </div>
                      <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Startup Commands
                          </label>
                          <textarea
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-200 bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="./setup.sh"
                          ></textarea>
                        </div>
                      </div>

                      <div class="-mx-3 md:flex mt-2">
                        <div class="md:w-full px-3">
                          <button class="md:w-full bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2  hover:border-gray-100 rounded-full">
                            Test
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHoneypot;
