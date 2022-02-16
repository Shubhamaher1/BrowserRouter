// import React from 'react';
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <h1>Randring Page</h1>
      <button>
        <Link to="/log-in">Log in</Link>
      </button>
      <button>
        <Link to="/sin-in">Sing up</Link>
      </button>
    </>
  );
};
