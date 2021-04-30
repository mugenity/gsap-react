import React, { useRef, useEffect } from "react";
import sponsorImg from "./assets/sponsor-logo.png";
import hoverEffect from "hover-effect";
import backImg1 from "./assets/01.png";
import backImg2 from "./assets/02.png";
import effect from "./assets/diss.png";

import { TweenMax, Expo } from "gsap";
import "./styles.scss";

const App = () => {
  const distortion = useRef(null);
  const h1Title = useRef(null);
  const h2Title = useRef(null);
  const h3Title = useRef(null);
  const pText = useRef(null);
  const sponsorImage = useRef(null);
  const sponsorPTitle = useRef(null);
  const navBarBox = useRef(null);
  const socialMedia = useRef(null);
  const lay1 = useRef(null);
  const lay2 = useRef(null);
  const lay3 = useRef(null);

  useEffect(() => {
    new hoverEffect({
      parent: distortion.current,
      intensity: 0.2,
      image1: backImg1,
      image2: backImg2,
      displacementImage: effect,
      imagesRatio: 720 / 580,
    });
  }, []);

  useEffect(() => {
    TweenMax.staggerFrom(
      navBarBox.current.children,
      1.5,
      {
        delay: 1.5,
        opacity: 0,
        y: "20",
        ease: Expo.easeInOut,
      },
      0.08
    );
    TweenMax.staggerFrom(
      socialMedia.current.children,
      1.5,
      {
        delay: 1.5,
        opacity: 0,
        x: "-20",
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.from(h1Title.current, 1.5, {
      delay: 1,
      y: "100%",
      ease: Expo.easeInOut,
    });
    TweenMax.from(h3Title.current, 1.5, {
      opacity: 0,
      delay: 1.2,
      y: "100%",
      ease: Expo.easeInOut,
    });
    TweenMax.from(pText.current, 1.5, {
      delay: 1.3,
      y: "100%",
      ease: Expo.easeInOut,
    });
    TweenMax.from(h2Title.current, 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-10000",
      ease: Expo.easeInOut,
    });
    TweenMax.from(sponsorImage.current, 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "2",
      ease: Expo.easeInOut,
    });
    TweenMax.from(sponsorPTitle.current, 1.5, {
      delay: 1.6,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut,
    });
    TweenMax.from(distortion.current, 1.5, {
      delay: 2,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut,
    });
    TweenMax.to(lay1.current, 1.5, {
      delay: 0.6,
      top: "-100%",
      ease: Expo.easeInOut,
    });
    TweenMax.to(lay2.current, 1.5, {
      delay: 0.8,
      top: "-100%",
      ease: Expo.easeInOut,
    });
    TweenMax.to(lay3.current, 1.5, {
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        {/****** OVERLAY ******/}
        <div ref={lay1} className="overlay first"></div>
        <div ref={lay2} className="overlay second"></div>
        <div ref={lay3} className="overlay third"></div>
        {/****** OVERLAY ******/}

        {/****** NAVBAR ******/}
        <nav ref={navBarBox} className="navbar">
          <div className="menu">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div className="lang">eng</div>
          <div className="search">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </nav>
        {/****** NAVBAR ******/}

        {/****** SOCIAL MEDIA ******/}
        <div className="media">
          <ul ref={socialMedia}>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </div>
        {/****** SOCIAL MEDIA ******/}

        {/****** TEXT ******/}
        <div className="text">
          <h1>
            <span ref={h1Title} className="hidetext">
              toni&guy
            </span>
          </h1>
          <h2 ref={h2Title}>duality</h2>
          <h3>
            <span ref={h3Title} className="hidetext">
              collection 2021 <br />
              duality
            </span>
          </h3>
          <p>
            <span ref={pText} className="hidetext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit modi
              assumenda nobis eius aliquid, consectetur illum, veritatis fugiat
              vitae possimus culpa facere voluptate delectus? Accusamus porro
              error sapiente eligendi facilis.
            </span>
          </p>
        </div>
        {/****** TEXT ******/}

        {/****** SPONSOR ******/}
        <div className="sponsor">
          <img ref={sponsorImage} src={sponsorImg} alt="sponsor-img" />
          <p ref={sponsorPTitle}>official sponsor</p>
        </div>
        {/****** SPONSOR ******/}

        {/****** DISTORTION ******/}
        <div ref={distortion} className="distortion"></div>

        {/****** DISTORTION ******/}
      </div>
    </>
  );
};

export default App;
