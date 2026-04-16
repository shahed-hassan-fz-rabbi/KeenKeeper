import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import { MdOutlineArchive } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((f) => f.id === parseInt(id));
        setFriend(single);
      });
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  const statusColor = {
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-400",
    "on-track": "bg-green-500",
  };


  const handleAction = (type) => {
  const newEntry = {
    id: Date.now(),
    type: type,
    name: friend.name,
    
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    title: `${type} with ${friend.name}`
  };

//   localStorage.removeItem("timeline");
 
  const existing = JSON.parse(localStorage.getItem("timeline")) || [];

  
  localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));
   toast.success(`${type} With ${friend.name}`);

  
  //alert(`${type} added to timeline`);
  //const notify = (type) => toast(${type});
  

};

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-12 gap-6">

      
      <div className="md:col-span-4 space-y-4">

        
        <div className="bg-white p-5 rounded-xl shadow-sm text-center">
          <img
            src={friend.picture}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />

          <h2 className="font-semibold text-sm">{friend.name}</h2>

          <span
            className={`text-[10px] px-2 py-0.5 text-white rounded-full mt-1 inline-block ${statusColor[friend.status]}`}
          >
            {friend.status}
          </span>

          <div className="flex justify-center gap-1 mt-1 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] bg-green-100 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2 italic">
            "{friend.bio}"
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            {friend.email}
          </p>
        </div>

        
        <div className="space-y-3">

          <button className="flex items-center gap-2 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
            <LuAlarmClock /> Snooze 2 Weeks
          </button>

          <button className="flex items-center gap-2 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
            <MdOutlineArchive /> Archive
          </button>

          <button className="flex items-center gap-2 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-red-500 hover:bg-red-50">
            <RiDeleteBin6Line /> Delete
          </button>

        </div>
      </div>

     
      <div className="md:col-span-8 space-y-9">

       
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h3>
            <p className="text-xs text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {friend.goal}
            </h3>
            <p className="text-xs text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <h3 className="text-sm font-bold text-[#244D3F]">
              {friend.next_due_date}
            </h3>
            <p className="text-xs text-gray-500">Next Due</p>
          </div>
        </div>

        
        <div className="bg-white rounded-xl px-5 py-4 shadow-sm flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold">Relationship Goal</h3>
            <p className="text-xs text-gray-500 py-3">
              Connect every{" "}
              <span className="font-semibold">{friend.goal}</span> days
            </p>
          </div>

          <button className="text-xs border px-3 py-1 rounded-md hover:bg-gray-100">
            Edit
          </button>
        </div>

        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-3">

            <button onClick=  {() => handleAction("Call")} className="border rounded-xl py-5 flex flex-col items-center hover:bg-gray-100">
              <FiPhone size={18} />
              <span className="text-xs mt-1">Call</span>
            </button>

            <button onClick={() => handleAction("Text")} className="border rounded-xl py-5 flex flex-col items-center hover:bg-gray-100">
              <FiMessageSquare size={18} />
              <span className="text-xs mt-1">Text</span>
            </button>

            <button onClick={() => handleAction("Video")} className="border rounded-xl py-5 flex flex-col items-center hover:bg-gray-100">
              <FiVideo size={18} />
              <span className="text-xs mt-1">Video Call</span>
            </button>

          </div>
        </div>

      </div>
      
    </div>
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};


export default ShowDetails;