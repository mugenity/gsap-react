import React, { useEffect, useRef } from "react";
import { TweenMax, Expo } from "gsap";

import "./styles.scss";

const App = () => {
  const leftCol = useRef(null);
  const logo = useRef(null);
  const buyNow = useRef(null);
  const year = useRef(null);
  const albumName = useRef(null);
  const albumArtist = useRef(null);
  const about = useRef(null);
  const albumName2 = useRef(null);
  const albumArtist2 = useRef(null);
  const albumGenre = useRef(null);
  const social = useRef([]);
  const albumName3 = useRef(null);

  useEffect(() => {
    TweenMax.from(leftCol.current, 2, {
      opacity: 0,
      width: "0%",
      ease: Expo.easeInOut,
    });
    TweenMax.from(logo.current, 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(buyNow.current, 2, {
      delay: 2.8,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(year.current, 2, {
      delay: 3.1,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(albumName.current, 2, {
      delay: 2.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(albumArtist.current, 2, {
      delay: 2.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(about.current.firstChild, 2, {
      delay: 3,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(albumName2.current, 2, {
      delay: 3.2,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(albumArtist2.current, 2, {
      delay: 3.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(albumGenre.current, 2, {
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.staggerFrom(
      social.current,
      2,
      {
        delay: 3.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.1
    );
    TweenMax.from(albumName3.current, 2, {
      delay: 4.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });

  return (
    <div className="container">
      <div ref={leftCol} className="left-col">
        <div ref={logo} className="logo">
          ALTRNTV
        </div>
        <div ref={year} className="year">
          EST 1994
        </div>
        <div className="cover">
          <div className="play">
            <ion-icon name="play"></ion-icon>
          </div>
        </div>
        <div className="data">
          <div ref={albumName} className="album-name">
            <p className="name">Kinda like it</p>
          </div>

          <div ref={albumArtist} className="album-artist">
            <p className="artist">Freak Like me</p>
          </div>
        </div>
        <div className="block-cover"></div>
        <div className="buy">
          <p ref={buyNow} className="more">
            Buy Now
          </p>
        </div>
      </div>
      <div className="right-col">
        <div className="upper">
          <div ref={about} className="about">
            <h1>Song info</h1>
            <div ref={albumName2} className="album-name2">
              <p>
                <ion-icon name="radio"></ion-icon> &nbsp;
                <span> Kinda like it</span>
              </p>
            </div>
            <div ref={albumArtist2} className="album-artist2">
              <p>
                <ion-icon name="person"></ion-icon> &nbsp;
                <span>Freak like me</span>
              </p>
            </div>
            <div ref={albumGenre} className="album-genre2">
              <p>
                <ion-icon name="musical-notes"></ion-icon> &nbsp;
                <span>Alternative</span>
              </p>
            </div>
            <div className="media">
              <p>Share now:</p>
              <ul>
                <li ref={(el) => (social.current[0] = el)}>
                  <ion-icon name="logo-facebook"></ion-icon>
                </li>
                <li ref={(el) => (social.current[1] = el)}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </li>
                <li ref={(el) => (social.current[2] = el)}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </li>
                <li ref={(el) => (social.current[3] = el)}>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="upper-block"></div>
        <div className="bottom">
          <div className="next">
            <ion-icon name="play-forward-outline"></ion-icon>{" "}
          </div>
          <div className="data2">
            <div className="album-name3">
              <p className="artist">Think about it</p>
            </div>
            <div className="album-artist3">
              <p ref={albumName3} className="name">
                Vhoyce Alwen
              </p>
            </div>
          </div>
          <div className="more">
            <p className="more">More like this</p>
          </div>
        </div>
        <div className="block-bottom"></div>
      </div>
    </div>
  );
};

export default App;
