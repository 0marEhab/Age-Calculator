import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SideBar({ isSidebarOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay: shown only when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 flex flex-col  justify-normal items-center p-5 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleSidebar} className="  text-gray-600 text-2xl">
          <IoClose />
        </button>
        <ul className="mt-10 w-full flex flex-col gap-1 space-y-4 font-os">
          <Link to={"/en"}>
            <li className="text-black bg-gray-100 w-full p-2 ">Main Page</li>
          </Link>
          <Link to={"/en/contact-us"}>
            {" "}
            <li className="text-black bg-gray-100 w-full p-3">contact Us </li>
          </Link>
          <Link to={"/en/about-us"}>
            {" "}
            <li className="text-black bg-gray-100 w-full p-3">About Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
