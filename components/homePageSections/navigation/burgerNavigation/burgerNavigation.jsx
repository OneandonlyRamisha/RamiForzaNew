"use client";
import Link from "next/link";
import classes from "./burgerNavigation.module.css";
import { useState, useEffect } from "react";

export default function NavigationBurger() {
  const [burgerActive, setBurgerActive] = useState(false);

  function handleBurgerClick() {
    setBurgerActive((e) => !e);
  }

  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = "hidden"; // full lock
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [burgerActive]);

  return (
    <div className={classes.burgerSection}>
      <div
        className={`${classes.sideBarContainer} ${
          burgerActive ? classes.active : undefined
        }`}
      >
        <ul className={classes.sideBar} onClick={handleBurgerClick}>
          <li>
            <Link className={classes.underline} href="/#services">
              Services
            </Link>
          </li>
          <li>
            <Link className={classes.underline} href="/#process">
              Process
            </Link>
          </li>
          <li>
            <Link className={classes.underline} href="/blog">
              Blog
            </Link>
          </li>

          <li>
            <Link className={classes.underline} href="/#ourWork">
              Our Work
            </Link>
          </li>
          <li>
            <Link className={classes.underline} href="/#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={classes.underline} href="/#faqId">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.navigationContainer}>
        <a href="#">
          <img
            className={classes.logo}
            src="logo.png"
            alt="RamiForza's Brand Logo"
          />
        </a>
        <button
          className={`${classes.burger} ${
            burgerActive ? classes.active : undefined
          }`}
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}
