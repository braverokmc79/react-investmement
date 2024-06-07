import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout.tsx";
import InvetMentCalculate from "./pages/InvetMentCalculate/InvetMentCalculate.tsx";
import AddUserPage from "./pages/AddUser/AddUserPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true,
         element: <InvetMentCalculate /> 
      },
      {
        path: 'investment',      
        element: <InvetMentCalculate />,
      },
      {
        path: 'addUser',      
        element: <AddUserPage />,
      }
    ]
  },
]);



const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
