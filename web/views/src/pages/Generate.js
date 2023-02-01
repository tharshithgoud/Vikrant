import React from 'react'
import Header from '../components/Header'
import SideBar from "../components/SideBar";

function generate() {
  return (
    <div className="flex">
      <SideBar />
      <div className="content-container bg-white">
        <Header />
        <div className="mt-16 mx-24 ">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
generate
             

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default generate