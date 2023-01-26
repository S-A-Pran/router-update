import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div className="App">
      <h4>Total Friends: {users.length}</h4>
      <Link to="/friends">
        <button>View All Friends</button>
      </Link>
    </div>
  );
};

export default Home;
