import classes from "./secondaryCta.module.css";

export default function SecondaryBtn({ text }) {
  return (
    <a
      className={`${classes.secondaryBtn} ${classes.underline}`}
      href="#ourWork"
    >
      {text}
    </a>
  );
}
