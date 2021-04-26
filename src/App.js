import React from "react";
// import { Switch, Route } from "react-router-dom";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";

import "./default.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="text">
          <div className="text-inner">
            <h1>Love Grayson</h1>
            <p>Student & Part-time Photographer</p>
            <a href="#" className="btn">
              Contact Me
            </a>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="img">
          <div className="img-stripe stripe1">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
          </div>
          <div className="img-stripe stripe2">
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
            <img src={img9} alt="img9" />
            <img src={img10} alt="img10" />
            <img src={img11} alt="img11" />
            <img src={img12} alt="img12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
