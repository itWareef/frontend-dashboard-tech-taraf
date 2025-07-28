import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import SidebarItem from "./SidebarItem";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSidBarProfile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-sidebar text-white md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`
          bg-sidebar h-full pt-10  overflow-x-hidden overflow-y-auto
          flex flex-col items-center w-[80px] 
          fixed md:static inset-y-0 right-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${
            isMobileOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }
           shadow-lg md:shadow-none
           [-ms-overflow-style:none] [scrollbar-width:none] 
          [&::-webkit-scrollbar]:hidden
        `}
      >
        <figure className="w-10 h-8 md:w-12 md:h-10 mb-8 md:mb-12">
          <img
            src={logo}
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </figure>
        <SidebarItem handleOpenSidBarProfile={handleOpenSidBarProfile} />
      </nav>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-[#aaaaaa] opacity-60 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {isOpen && (
        <SidebarProfile
          handleOpenSidBarProfile={handleOpenSidBarProfile}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Sidebar;
