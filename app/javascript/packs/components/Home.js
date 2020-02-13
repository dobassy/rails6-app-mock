import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/page/login">Log In</Link>
      <br></br>
      <Link to="/page/signup">Sign Up</Link>
    </div>
  );
};
export default Home;
