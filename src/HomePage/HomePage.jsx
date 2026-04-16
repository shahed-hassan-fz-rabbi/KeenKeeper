import React, { useEffect, useState } from 'react';
import Card from "../card/Card";

const HomePage = () => {

    const [friends, setFriends] =useState([]);

    useEffect(()=> {
        fetch("/friends.json")
        .then(res => res.json())
        .then(data => setFriends(data));

    }, []);



  return (
    <div className="bg-[#F5F7F6] py-16 px-4">

     
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-white px-6 mt-3">
          + Add a Friend
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-bold text-[#244D3F]">10</h3>
          <p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-bold text-[#244D3F]">3</h3>
          <p className="text-sm text-gray-500 mt-1">On Track</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-bold text-[#244D3F]">6</h3>
          <p className="text-sm text-gray-500 mt-1">Need Attention</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-bold text-[#244D3F]">12</h3>
          <p className="text-sm text-gray-500 mt-1">Interactions This Month</p>
        </div>

      </div>

      {/* card */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            friends.map(friend => (
              <Card key={friend.id} friend={friend} />
            ))
          }
        </div>
      </div>





    </div>
  );
};

export default HomePage;