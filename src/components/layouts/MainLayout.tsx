import React, { type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '/cart'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="relative">
      <Navbar />
      <div className="relative w-full min-h-screen bg-white">
        <div className=" inset-0 min-h-screen w-full">
          {children || <Outlet />}
        </div>
        {!shouldHideFooter && (
          <div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;