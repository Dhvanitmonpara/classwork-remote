import ReactDOM from "react-dom/client";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Layout from "./Layout.jsx";
import User from "./Components/User/User";
import Github, { githubInfoLoader } from "./Components/Github/Github";
import React from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "user:userId",
//         element: <User />,
//       },
//       {
//         path: 'github',
//         element: <Github/>,
//         loader: {githubInfoLoader}
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
