import React from "react";
import "./main.css";
import dog_pic_small_square from "./images/dog_pic_small_square.png";
// import { useNavigate } from "react-router-dom";

function Main() {
  // let navigate = useNavigate();
  return (
    <div className="main">
       <div className="container">
      <div className="content">
       <p>Content here</p>
       <div className="image-wrap">
              <img src={dog_pic_small_square} alt="doggy" />
            </div>
        {/* <button
          className="button"
          onClick={() => {
            navigate(
             
              "/recap"
            );
          }}
        >
          recap
        </button> */}
      </div>
    </div>
    </div>
  );
}

export default Main;
