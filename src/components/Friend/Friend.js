import React from "react";
import { useLoaderData } from "react-router-dom";

const Friend = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="App">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default Friend;
