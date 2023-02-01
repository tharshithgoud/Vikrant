import React from "react";

import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className="mx-10"
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
        class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
      >
        Start date
      </button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 8)}
        minDate={new Date(2022, 10, 10)}
        maxDate={new Date(2023, 0, 10)}
        headerFormat="DD, MM dd"
      />
      <button
        className="mx-10"
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
        class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
      >
        End date
      </button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 8)}
        minDate={new Date(2021, 10, 10)}
        maxDate={new Date(2022, 8, 17)}
        headerFormat="DD, MM dd"
      />
    </div>
  );
};

export default App;
