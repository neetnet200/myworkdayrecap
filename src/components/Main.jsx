import React from "react";
import "./main.css";
import dog_pic_small_square from "./images/dog_pic_small_square.png";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  return (
    <div className="main">
      <div className="container">
        <div className="col-1">
          <div className="image-wrap">
            <img src={dog_pic_small_square} alt="doggy" />
          </div>
        </div>

        <div className="col-2">
          {/* <h2>Home</h2> */}
          <div className="col-2-container">
            {/* <button
              className="button"
              onClick={() => {
                navigate("/recap");
              }}
            >
              recap
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
