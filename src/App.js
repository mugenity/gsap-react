import React, { useRef, useEffect, useState } from "react";
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

import { TimelineMax, gsap } from "gsap";
import "./default.scss";

function App() {
  const [open, setOpen] = useState(false);

  const toggleMenu = useRef(null);
  const openBtn = useRef(null);
  const closeMenu = useRef(null);
  const menuOpens = useRef(null);
  const textTitles = useRef([]);
  const stripe1 = useRef([]);
  const stripe2 = useRef([]);

  const tlm = new TimelineMax();

  useEffect(() => {
    if (open) {
      tlm.to(openBtn.current, 1.3, {
        opacity: 0,
        rotation: 180,
      });
      tlm.to(
        closeMenu.current,
        1.6,
        {
          opacity: 1,
          rotation: 180,
        },
        "-=.9"
      );
      tlm.to(
        menuOpens.current,
        1.6,
        {
          scale: 1,
        },
        "-=1"
      );
    }
  }, [open]);

  useEffect(() => {
    gsap.from(textTitles.current, 2, {
      opacity: 0,
      delay: 1,
      stagger: 0.2,
    });

    gsap.from(toggleMenu.current, 1, {
      x: -150,
      y: -150,
      delay: 2,
    });
    gsap.from(stripe1.current, 2, {
      y: 400,
      opacity: 0,
      stagger: 0.4,
      delay: 5,
    });
    gsap.from(stripe2.current, 2, {
      opacity: 0,
      stagger: 0.4,
      delay: 5,
    });
  }, []);

  const handleMenu = () => {
    setOpen(!open);
    tlm.reversed(!tlm.reversed());
  };

  return (
    <div className="App">
      <button ref={toggleMenu} onClick={handleMenu} className="toggleBtn">
        <i ref={openBtn} className="fas fa-bars openMenu" />
        <i ref={closeMenu} className="fas fa-times closeMenu" />
      </button>

      <div ref={menuOpens} className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">WORK</a>
            </li>
            <li>
              <a href="#">GALLERY</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="wrapper">
        <div className="text">
          <div className="text-inner">
            <h1
              ref={(el) => {
                textTitles.current[0] = el;
              }}
            >
              Love Vision
            </h1>
            <p
              ref={(el) => {
                textTitles.current[1] = el;
              }}
            >
              Self-taught & Part-time Photographer
            </p>
            <a
              ref={(el) => {
                textTitles.current[2] = el;
              }}
              href="#"
              className="btn"
            >
              Contact Me
            </a>
            <div
              ref={(el) => {
                textTitles.current[3] = el;
              }}
              className="social"
            >
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
            <img
              ref={(el) => {
                stripe1.current[0] = el;
              }}
              className="stripe1-img"
              src={img1}
              alt="img1"
            />
            <img
              ref={(el) => {
                stripe1.current[1] = el;
              }}
              className="stripe1-img"
              src={img2}
              alt="img2"
            />
            <img
              ref={(el) => {
                stripe1.current[2] = el;
              }}
              className="stripe1-img"
              src={img3}
              alt="img3"
            />
            <img
              ref={(el) => {
                stripe1.current[3] = el;
              }}
              className="stripe1-img"
              src={img4}
              alt="img4"
            />
            <img
              ref={(el) => {
                stripe1.current[4] = el;
              }}
              className="stripe1-img"
              src={img5}
              alt="img5"
            />
            <img
              ref={(el) => {
                stripe1.current[5] = el;
              }}
              className="stripe1-img"
              src={img6}
              alt="img6"
            />
          </div>
          <div className="img-stripe stripe2">
            <img
              ref={(el) => {
                stripe2.current[0] = el;
              }}
              src={img7}
              alt="img7"
            />
            <img
              ref={(el) => {
                stripe2.current[1] = el;
              }}
              src={img8}
              alt="img8"
            />
            <img
              ref={(el) => {
                stripe2.current[2] = el;
              }}
              src={img9}
              alt="img9"
            />
            <img
              ref={(el) => {
                stripe2.current[3] = el;
              }}
              src={img10}
              alt="img10"
            />
            <img
              ref={(el) => {
                stripe2.current[4] = el;
              }}
              src={img11}
              alt="img11"
            />
            <img
              ref={(el) => {
                stripe2.current[5] = el;
              }}
              src={img12}
              alt="img12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
