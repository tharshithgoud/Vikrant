import React from 'react'
import DataTable from "react-data-table-component";
import { useState, useEffect } from 'react';
import Header from './Header'
import SideBar from "./SideBar";
import CsvDownload from 'react-json-to-csv';

function NTPOT() {
    const [ntp, setntp] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/ntpotData")
            .then((response) => response.json())
            .then((data) => setntp(data.allData));
    }, []);
    const columns = [
        {
            name: 'Source ID',
            selector: row => row.src_id,
        },
        {
            name: 'Mode',
            selector: row => row.mode,
        },
        {
            name: 'Start',
            selector: row => row.start,
        },
        {
            name: 'Latest',
            selector: row => row.latest,
        },
        {
            name: 'Requested Size',
            selector: row => row.request_size,
        },
        {
            name: 'Response Size',
            selector: row => row.response_size,
        },
        {
            name: 'Requested Packet',
            selector: row => row.request_pkt.data,
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
                            <div></div>
                            <div>
                            <h1 class="text-4xl font-medium leading-tight mt-0 mb-2 text-black-600 text-center mt-4">Data of Honeypot - DDospot</h1>
                                <CsvDownload
                                    data={ntp}
                                    filename="ddospot.csv"
                                    className='ml-5 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'
                                >
                                    Export Data To CSV
                                </CsvDownload>                     <DataTable
                                    className='mt-10'
                                    pagination
                                    highlightOnHover
                                    data={data}
                                    columns={columns}
                                /></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NTPOT