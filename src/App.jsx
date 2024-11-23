import Ar from "./components/Ar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import En from "./components/en/En";

import ContactUs from "./components/ContactUs";
import CallUs from "./components/CallUs";
import ContactUsEn from "./components/en/ContactUsEn";
import CallUsEn from "./components/en/CallUsEn";
import Policy from "./components/Policy";
import Terms from "./components/Terms";
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
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/call-us",
      element: <CallUs />,
    },

    {
      path: "/en",
      element: <En />,
    },

    {
      path: "/en/contactUs",
      element: <ContactUsEn />,
    },
    {
      path: "/en/callUs",
      element: <CallUsEn />,
    },
  ]);
  return <RouterProvider router={router} />;
}
