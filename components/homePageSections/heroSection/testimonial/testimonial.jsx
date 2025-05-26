import classes from "./testimonial.module.css";

export default function Testimonial({ text }) {
  return (
    <div className={classes.testimonial}>
      <p className={classes.star}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className={classes.testimonialText}>{text}</p>
    </div>
  );
}
