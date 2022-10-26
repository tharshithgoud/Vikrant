import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
function Ntpot() {
  const columns = {
    0: {
      name: "src",
    },
  };
  const data = {
    0: {
      src: "tes",
    },
  };
  return (
    <div>
      <DataTable pagination highlightOnHover columns={columns} data={data} />
    </div>
  );
}

export default Ntpot;
