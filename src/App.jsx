import Ar from "./components/Ar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import En from "./components/en/En";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./components/ContactUs";
import CallUs from "./components/CallUs";
import ContactUsEn from "./components/en/AboutUsEn";
import CallUsEn from "./components/en/CallUsEn";
import Policy from "./components/Policy";
import Terms from "./components/Terms";
import AboutUsEn from "./components/en/AboutUsEn";
import PolicyEN from "./components/en/PolicyEn";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Ar />,
    },
    {
      path: "/policy",
      element: <Policy />,
    },
    {
      path: "/terms-and-conditions",
      element: <Terms />,
    },
    {
      path: "/about-us",
      element: <ContactUs />,
    },
    {
      path: "/contact-us",
      element: <CallUs />,
    },

    {
      path: "/en",
      element: <En />,
    },

    {
      path: "/en/about-us",
      element: <AboutUsEn />,
    },
    {
      path: "/en/policy",
      element: <PolicyEN />,
    },
    {
      path: "/en/contact-us",
      element: <CallUsEn />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* ToastContainer must be included once */}
      <ToastContainer />
    </>
  );
}
