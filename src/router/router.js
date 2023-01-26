import { createBrowserRouter } from "react-router-dom";
import Friend from "../components/Friend/Friend";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Main from "../layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "home",
        loader: async () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        element: <Home></Home>,
      },
      {
        path: "friends",
        loader: async () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        element: <Friends></Friends>,
      },
      {
        path: "friend/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.id}`
          );
        },
        element: <Friend></Friend>,
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);
