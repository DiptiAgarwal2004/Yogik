import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Cookies from "universal-cookie";

export default function Home() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-heading">YogiK</h1>
        <div>
          <Link to="/about">
            <button className="btn btn-secondary" id="about-btn">
              About
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary" id="about-btn">
              Login
            </button>
          </Link>
        </div>
      </div>

      <h1 className="description">A Yoga AI Trainer</h1>
      <p className="desc">An artificial intelligence yoga guide!!</p>
      <div className="home-main">
        <div className="btn-section">
          {token ? (
            <Link to="/start">
              <button className="btn start-btn">Let's Start</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn start-btn">Let's Start</button>
            </Link>
          )}
          <Link to="/tutorials">
            <button className="btn start-btn">Tutorials</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
