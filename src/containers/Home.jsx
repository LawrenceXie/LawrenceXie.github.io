import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-400 to-blue-600">
        <div class="p-6 m-6 bg-blue-100 shadow-xl rounded-full text-center text-3xl w-80">
          My Finance Story
          <div class="text-base">Coming soon</div>
        </div>
        <Link to="/Music" class="p-3 m-4 bg-blue-100 hover:bg-black hover:text-white duration-500 ring-8 rounded-full text-center text-xl">Music</Link>
    </div>       
    );
  };
  
  export default Home;