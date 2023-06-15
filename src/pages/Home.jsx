import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user, logout, userType } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      {user && (
        <>
          <img src={user.avatar} alt={user.username} />
          <p>Welcome, {user.username}!</p>
          {userType === "admin" && (
            <p>You have admin access. Perform admin actions here.</p>
          )}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
}

export default Home;
