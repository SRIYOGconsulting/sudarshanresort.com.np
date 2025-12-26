import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Rooms from "./pages/Rooms.jsx";
import QR from "./pages/QR.jsx";
import Services from "./pages/Services.jsx";

// Accessibility audit (dev only)
if (import.meta.env.MODE !== "production") {
  import("react-axe").then(({ default: axe }) => {
    axe(require("react"), require("react-dom"), 1000);
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "services", element: <Services /> },
      { path: "rooms", element: <Rooms /> },
      { path: "qr", element: <QR /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
