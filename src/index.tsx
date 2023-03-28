import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Background from "./images/repair.svg";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

let backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <div style={backgroundStyle}>
          <Navbar />
          <Body />
      </div>
  </React.StrictMode>
);