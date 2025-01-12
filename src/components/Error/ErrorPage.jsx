import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#121c7e] to-[#020836]">
        <div className="md:w-96 text-center p-8 bg-white rounded-lg shadow-lg" >
          <h1 className="text-4xl font-bold text-[#377fde] mb-4" >Oops!</h1>
          <p className="text-lg text-gray-700 mb-6" >
           This page is not found.
          </p>
        <div className='flex justify-center gap-4'>
        
          <button onClick={() => navigate("/")} className="px-4 py-2 bg-[#151515] text-white rounded-2xl hover:bg-[#4d36b7]  duration-300 transition-transform hover:scale-105 shadow-2xl">
            Go Home
          </button>
        </div>
        </div>
      </div>
    );
};

export default ErrorPage;