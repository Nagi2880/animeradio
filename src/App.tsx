//Tools required
import React from 'react';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
//Components
import Home from './Pages/Home';
import Test from './test';

function App() {

  //Const for React Router that is needed to create a routes
  const MainRoute = createBrowserRouter([
    //Main route. Here start the app
    {
      path:"/",
      element: <Home />,
    },
    //Route for my testings
    {
      path:"/test",
      element: <Test />
     }
  ])

  return (
    <div className="App">
     <RouterProvider router={MainRoute} />
    </div>
  );
}

export default App;
