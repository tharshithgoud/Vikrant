import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CsvDownload from 'react-json-to-csv';
import DataTable from "react-data-table-component";


function FlowData() {
    const [ntp, setntp] = useState([]);
    useEffect(() => {
        fetch("http://20.244.11.250:3002/cicData")
            .then((response) => response.json())
            .then((data) => setntp(data.cicJs));
    }, []);
    const columns = [
        {
            name: 'Flow ID',
            selector: row => row["Flow ID"],
        },
        {
            name: 'Source IP',
            selector: row => row["Src IP"],
        },
        {
            name: 'Source Port',
            selector: row => row["Src Port"],
        },
        {
            name: 'Destination IP',
            selector: row => row["Dst IP"],
        },
        {
            name: 'Destination Port',
            selector: row => row["Src IP"],
        },
        {
            name: 'Flow Duration',
            selector: row => row["Flow Duration"],
        },
        {
            name: 'Protocol',
            selector: row => row["Protocol"],
        },
        {
            name: 'Fwd Packets',
            selector: row => row["Total Fwd Packet"],
        },

        {
            name: 'Bwd Packets',
            selector: row => row["Total Bwd packets"],
        },
        {
            name: 'Flow Packets/s',
            selector: row => row["Flow Packets/s"],
        },
        {
            name: 'Session',
            selector: row => row["Src IP"],
        },
        {
            name: 'Flow IAT Mean',
            selector: row => row["Flow IAT Mean"],
        },
        {
            name: 'Variance - Packet Length',
            selector: row => row["Packet Length Variance"],
        },
        {
            name: 'Idle Mean',
            selector: row => row["Idle Mean"],
        },
        {
            name: 'Country',
            selector: row => row["Country"],
        },
        {
            name: 'Mean Packet Length',
            selector: row => row["Packet Length Mean"],
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
                                <h1 class="text-4xl font-medium leading-tight mt-0 mb-2 text-black-600 text-center mt-4">Network FLow Data</h1>
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

export default FlowData;
