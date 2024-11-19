import Ar from "./components/Ar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hijri from "./components/hijri/Hijri";
import Melady from "./components/melady/Melady";
import En from "./components/en/En";
import HijriEn from "./components/en/hijri/HijriEn";
import MeladyEn from "./components/en/melady/MeladyEn";
import ContactUs from "./components/ContactUs";
import CallUs from "./components/CallUs";
import ContactUsEn from "./components/en/ContactUsEn";
import CallUsEn from "./components/en/CallUsEn";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Ar />,
    },
    {
      path: "/hijri",
      element: <Hijri />,
    },
    {
      path: "/contactUs",
      element: <ContactUs />,
    },
    {
      path: "/callUs",
      element: <CallUs />,
    },
    {
      path: "/gregorian",
      element: <Melady />,
    },
    {
      path: "/en",
      element: <En />,
    },
    {
      path: "/en/hijri",
      element: <HijriEn />,
    },
    {
      path: "/en/gregorian",
      element: <MeladyEn />,
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
