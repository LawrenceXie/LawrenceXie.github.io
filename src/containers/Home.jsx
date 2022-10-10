import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 col-span-12 h-64 border-2 m-1">Profile Picture</div>
          <div className="md:col-span-6 col-span-12 h-64 border-2 m-1">Hi. This is Lawrence's website</div>
          <div id="benefits" className="col-span-12 grid grid-cols-3">
            <div className="md:col-span-1 col-span-3 h-64 border-2 m-1 p-3">
              <Link to="/Music">My music</Link>
              <p>My musical projects and interests</p>
            </div>
            <div className="md:col-span-1 col-span-3 h-64 border-2 m-1 p-3">
              <h2 className="text-4xl py-2">Area 2</h2>
              <p>About area 2</p>
            </div>
            <div className="md:col-span-1 col-span-3 h-64 border-2 m-1 p-3">
              <h2 className="text-4xl py-2">Area 3</h2>
              <p>About area 3</p>
            </div>
          </div>
          <div className="col-span-12 h-64 border-2 m-1">Other stuff</div>
          <div className="col-span-12 h-12 border-2 m-1">Links</div>
        </div>
      </>
    );
  };
  
  export default Home;