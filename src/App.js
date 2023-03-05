import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import style from './App.scss';

//components
import Homepage from 'container/home/Homepage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);

  return (
    <div className={style.container}>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
