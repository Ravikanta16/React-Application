import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div 
            className="min-h-screen bg-gray-100 flex flex-col items-center justify-center"
            style={{ backgroundImage: 'url(https://imgs.search.brave.com/a5QcK2gCmuTtp0FAkKqkimXRGLm852CVpmXAj5QtXZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzU0Lzc4LzY0/LzM2MF9GXzY1NDc4/NjQwNV9paUNMMzV6/a0g5dWJsUVRCUlBu/dEJWNWdLaEYyTkE3/VC5qcGc)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Link 
                to="/counter" 
                className="text-center text-xl text-white font-semibold flex items-center justify-center mb-2"
            >
                Counter Page
            </Link>
                    
            <Link 
                to="/user" 
                className="text-center text-xl text-white font-semibold flex items-center justify-center mb-2"
            >
                User Form Page
            </Link>            
                    
            <Link 
                to="/editor" 
                className="text-center text-xl text-white font-semibold flex items-center justify-center mb-2"
            >
                Text Editor Page
            </Link>

            <Link 
                to="/dashboard" 
                className="text-center text-xl text-white font-semibold flex items-center justify-center mb-2"
            >
                Dashboard Page
            </Link>
        </div>
    );
};

export default Home;
