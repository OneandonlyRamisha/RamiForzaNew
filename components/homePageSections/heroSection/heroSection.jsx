import CtaBtn from "@/components/ctaBtn/ctaBtn";
import classes from "./heroSection.module.css";
import Testimonial from "./testimonial/testimonial";
import SecondaryBtn from "./secondaryCta/secondaryCta";

export default function HeroSection() {
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroContainer}>
        <h2 className={classes.callOut}>Are You A Business Owner?</h2>
        <h1 className={classes.header}>
          We'll Build Your Business A Website,
          <span className={classes.highlight}>
            That Drives Real Business Results
          </span>
        </h1>
        <h3 className={classes.subHeader}>
          We build you a custom website designed for increasing your conversion
        </h3>

        <div className={classes.btnContainer}>
          <CtaBtn />

          <SecondaryBtn text="See Our Work" />
        </div>
      </div>
      <div className={classes.testimonialsContainer}>
        <Testimonial text='"HUGE increase in new customers!"' />
        <Testimonial text='"My personal brand combined with Ramiforza Website is a Money making Machine"' />
        <Testimonial text='"Went from barely booking any calls to 10 calls a week!"' />
      </div>
    </section>
  );
}
