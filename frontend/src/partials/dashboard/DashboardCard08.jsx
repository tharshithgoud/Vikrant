import React from 'react';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08() {

  const chartData = {
    labels: [
      '10-10-2022', '01-10-2021', '02-01-2021',
      '03-10-2022', '04-10-2021', '05-01-2021',
      '06-10-2022', '07-10-2021', '08-01-2021',
      '09-10-2022', '10-10-2021', '11-01-2021',
      '12-10-2022', '01-10-2022', '02-01-2022',
      '03-10-2022', '04-10-2022', '05-01-2022',
      '06-10-2022', '07-10-2022', '08-01-2022',
      '09-10-2022', '10-10-2022', '11-01-2022',
      '12-10-2022', '01-10-2022',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Attacks',
        data: [
          73, 64, 254, 69, 104, 104, 164,
          164, 120, 120, 120, 148, 142, 104,
          122, 110, 104, 152, 166, 233, 268,
          252, 284, 284, 333, 79,
        ],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
      // Blue line
      {
        label: 'Unique IP',
        data: [
          15, 25, 119, 60, 94, 45, 100,
          115, 56, 104, 2, 72, 102, 47,
          80, 90, 20, 10, 50, 121, 152,
          118, 76, 122, 128, 45,
        ],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Attacks vs IP</h2>
      </header>
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
