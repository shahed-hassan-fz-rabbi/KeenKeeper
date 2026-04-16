import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      
      <NavBar />

     
      <div className="min-h-[70vh]">
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;