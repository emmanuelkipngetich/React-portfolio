import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
      <div className="icon">
        <a
          href="https://www.facebook.com/nick.mendez.1029"
          className="facebook"
        >
          <i className="fa fa-facebook-f"></i> Facebook{" "}
        </a>
        <a href="https://www.instagram.com/nickeymullah/" className="twitter">
          {" "}
          <i className="fa fa-instagram"></i> Instagram{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
