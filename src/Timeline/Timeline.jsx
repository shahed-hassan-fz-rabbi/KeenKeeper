import { useEffect, useState } from "react";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  
  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-6">

     
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      
      <div className="mb-6">
        <select
          className="select select-bordered w-52"
          onChange={(e) => setFilter(e.target.value)}
        >

          
          <option>All</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
      </div>

     
      <div className="space-y-3">

        {
          filteredData.length === 0 ? (
            <p className="text-gray-500">No data found</p>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
              >

               
                <div className="text-lg">
                  {item.type === "Call" && <FiPhone />}
                  {item.type === "Text" && <FiMessageSquare />}
                  {item.type === "Video" && <FiVideo />}
                </div>

               
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>

              </div>
            ))
          )
        }

      </div>
    </div>
  );
};

export default Timeline;