import classes from "./icons.module.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Icons from "./icons";

export default function SocialIcons() {
  return (
    <>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={classes.icon} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className={classes.icon} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className={classes.icon} />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest className={classes.icon} />
      </a>
    </>
  );
}
