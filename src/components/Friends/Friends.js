import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Friends.css";

const Friends = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="users">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.website}</p>
          <Link to={`/friend/${user.id}`}>
            <button>view Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Friends;
