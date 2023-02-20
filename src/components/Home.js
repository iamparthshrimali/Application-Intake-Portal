import React, { useState } from "react";
import home from "../css/home.module.css";
import Login from "./home/Login";
import Register from "./home/Register";

function Home() {
  const [currentForm, setCurrentForm]=useState("login");
  
  return (
    <div className={home.section}>
      <div className={home.container}>
        <div className={home.left}>
          <div className={home.text}>
            <div className={home.heading}>
              <h1>Application In Take Portal</h1>
            </div>
            <div className={home.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vitae ullam esse ipsum? Libero possimus, sunt numquam ducimus labore dignissimos aliquam dicta veritatis voluptate porro distinctio odio corrupti eligendi optio iure ad enim excepturi qui reiciendis! Suscipit enim tempore ab modi minus ullam aliquam nihil!
            </div>
          </div>
        </div>
        <div className={home.right}>
          <div className={home.form}>
              { currentForm == "login" ? <Login setCurrentForm={setCurrentForm}/> : <Register setCurrentForm={setCurrentForm}/> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
