import React from "react";
import { Link } from "react-router-dom";

const Card = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;

  const statusColor = {
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-400",
    "on-track": "bg-green-500"
  };

  return (

    <Link to={`/friend/${friend.id}`}>

    <div className="bg-white rounded-xl shadow p-5 text-center cursor-pointer">

      <img
        src={picture}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-3"
      />

      <h3 className="font-semibold">{name}</h3>

      <p className="text-xs text-gray-500">
        {days_since_contact} days ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {
          tags.map((tag, i) => (
            <span key={i} className="text-xs bg-green-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))
        }
      </div>

      {/* Status */}
      <div className={`mt-3 text-white text-xs px-3 py-1 rounded-full inline-block ${statusColor[status]}`}>
        {status}
      </div>

    </div>

    </Link>
    
  );
};

export default Card;