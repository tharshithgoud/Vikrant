import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
function PredictCic() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [data, setData] = useState({});
  const [adb, setAdb] = useState(false);
  const handleChange = event => {
    setData(event.target.value);
  };
  async function pop() {
    try {
      const json = JSON.parse(data)
      console.log(json)
      if (json.Label == undefined) {
        window.alert("Invalid data")
      }
      else if (json.Label == "NeededManualLabel") {
        setAdb(true)
        await sleep(2000);
        window.alert("Normal Traffic");
        setAdb(false)
      } else {
        setAdb(true)
        await sleep(4000);
        window.alert("Attack Traffic")
        setAdb(false)
      }
    }
    catch {
      alert("Invalid Data Provided")
    }
  }
  return (
    <div className="flex">
      <SideBar load={adb}/>
      <div className="content-container bg-white">
        <Header />
        <div className="mt-16 mx-24 ">
          <div className="flex h-screen overflow-hidden">
         
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <h1 className="text-2xl text-center font-bold pb-5">
                    Currently in Beta!!
                  </h1>
              <div>
                <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-14 px-12 lg:px-24 shadow-xl mb-24 mt-5 rounded-3xl mt-10">
                  <h1 className="text-2xl text-center font-bold pb-5">
                    Predict Network FlowData
                  </h1>
                  <form>
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col rounded-2xl">
                      <div class="-mx-3 md:flex mb-6">
                        <div class="flex mt-6 ">
                          <div>
                            <label
                              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                              for="application-link"
                            >
                              Choose Model
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
                                Kaggle - 2017                        </label>
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
                                IEEE - Italy
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
                                IEEE - 2(CNN)
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="md:w-full px-3">
                          <label
                            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                            for="application-link"
                          >
                            Enter sample data
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
        h-96
        focus:text-gray-700  focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="JSON Format"
                            onChange={handleChange}
                            value={data}
                          ></textarea>
                        </div>
                      </div>

                      <div class="-mx-3 md:flex mt-2">
                        <div class="md:w-full px-3">
                          <div
                            class=" md:w-full bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:cursor-pointer hover:border-gray-100 rounded-full text-center"
                            onClick={pop}
                          >
                            Predict
                          </div>
                          <div class="max-w-xl mt-5 ml-36">
                            <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                              <span class="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-6 h-6 text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <span class="font-medium text-gray-600">
                                  Drop files to Attach, or Browse
                                </span>
                              </span>
                              <input
                                type="file"
                                name="file_upload"
                                class="hidden"
                              />
                            </label>
                          </div>
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

export default PredictCic;
