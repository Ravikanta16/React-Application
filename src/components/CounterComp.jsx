import React, { useState } from 'react';

const CounterComp = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    const reset = () => setCount(0);

    // Calculate the background color dynamically
    const backgroundColor = `rgba(0, 123, 255, ${Math.min(count / 100, 1)})`;

    return (
        <div 
            style={{ backgroundColor }} 
            className="h-screen border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center"
        >
            <div className='border-2 border-gray-300 bg-gray-200 rounded-lg p-6'>  
            <h1 className="flex text-4xl font-bold items-center justify-center text-red-400">{count}</h1>
            <div className="flex flex-col gap-4 mt-4">
                <button 
                    onClick={increment} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Increment
                </button>
                <button 
                    onClick={decrement} 
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                >
                    Decrement
                </button>
                <button 
                    onClick={reset} 
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Reset
                </button>
            </div>
            </div>
        </div>
    );
};

export default CounterComp;
