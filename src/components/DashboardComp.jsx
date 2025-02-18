import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardComp = () => {
  const [counter, setCounter] = useState(0);

  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Activity',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  });

  const updateChartData = () => {
    const updatedData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: chartData.datasets[0].data.map((val, index) =>
            index === counter % 6 ? val + 1 : val
          )
        }
      ]
    };
    setChartData(updatedData);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter>0 ? counter - 1:counter);
  };

  useEffect(() => {
    updateChartData();
  }, [counter]); 

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Profile Trends',
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="p-6">
      <div className='flex flex-col items-center justify-center mb-4'>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      
        <h2 className="text-xl font-medium">User Counter: {counter}</h2>
        <div className='flex gap-4'>
        <button 
          onClick={incrementCounter} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment Counter
        </button>
        <button 
          onClick={decrementCounter} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Decrement Counter
        </button>
        </div>
      </div>
      
      <div className="w-full max-w-3xl mx-auto border-2 border-gray-300 rounded-lg p-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
    <div>
      <Link to='/home' className='text-blue-400'>Go to Home Page</Link>
    </div>
    </div>
  );
};

export default DashboardComp;
