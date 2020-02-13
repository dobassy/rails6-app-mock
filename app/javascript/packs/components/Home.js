import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = props => {
  const handleClick = () => {
    axios
      .delete("http://localhost:5000/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
        props.history.push("/page/");
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Link to="/page/login">Log In</Link>
      <br></br>
      <Link to="/page/signup">Sign Up</Link>
      <br></br>
      {props.loggedInStatus ? (
        <Link to="/page/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;
