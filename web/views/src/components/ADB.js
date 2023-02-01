import React from 'react'
import DataTable from "react-data-table-component";
import { useState, useEffect } from 'react';
import Header from './Header'
import SideBar from "./SideBar";
import CsvDownload from 'react-json-to-csv';

function ADB() {
    const [ntp, setntp] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/adbData")
            .then((response) => response.json())
            .then((data) => setntp(data.dataAdb)).then(console.log(ntp));
    }, []);
    const columns = [
        {
            name: 'Event ID',
            selector: row => row.eventid,
        },
        {
            name: 'Source IP',
            selector: row => row.src_ip,
        },
        {
            name: 'Source Port',
            selector: row => row.src_port,
        },
        {
            name: 'Destination IP',
            selector: row => row.dst_ip,
        },
        {
            name: 'Destination Port',
            selector: row => row.dst_port,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'Timestamp',
            selector: row => row.timestamp,
        },
        {
            name: 'Input',
            selector: row => row.input,
        },
        
        {
            name: 'OutFile',
            selector: row => row.outfile,
        },
        {
            name: 'SHA sum',
            selector: row => row.shasum,
        },
        {
            name: 'Session',
            selector: row => row.session,
        },
        {
            name: 'Sensor',
            selector: row => row.sensor,
        },
        {
            name: 'Sourse URL',
            selector: row => row.src_url,
        },

    ];

    const data = ntp
    return (
        <div className="flex">
            <SideBar />
            <div className="content-container bg-white">
                <Header />
                <div className="mt-16">
                    <div className="flex h-screen overflow-hidden">
                        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            <div>
                            <h1 class="text-4xl font-medium leading-tight mt-0 mb-2 text-black-600 text-center mt-4">Data of Honeypot - ADBHoney</h1>
                                <CsvDownload
                                    data={ntp}
                                    filename="adb.csv"
                                    className='ml-5 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'
                                >
                                    Export Data To CSV
                                </CsvDownload>      
                                               <DataTable
                                    className='mt-10'
                                    pagination
                                    highlightOnHover
                                    data={data}
                                    columns={columns}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ADB