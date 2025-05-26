import ContactForm from "./contactForm";
import classes from "./contactSection.module.css";
import SocialIcons from "./icons";

export default function ContactSection() {
  const steps = [
    {
      title: "Step 1: Proposal",
      desc: "We'll prepare a detailed proposal including scope, timeline, and approximate pricing—based on the information you provide about your project.",
    },
    {
      title: "Step 2: Discussion",
      desc: "We'll meet to discuss the proposal, clarify all points, and explore options. Google Meet or Zoom usually works best for this.",
    },
    {
      title: "Step 3: Approval",
      desc: "Once everything is clear and agreed upon, we'll sign the contract and finalize the project goals.",
    },
    {
      title: "Step 4: Starting",
      desc: "With everything set, we’ll begin the first sprint and start bringing your project to life.",
    },
  ];

  return (
    <section className={classes.contactSection} id="contact">
      <div className={classes.headerPart}>
        <h4 className={classes.header}>Contact us </h4>
        <p className={classes.email}>Myemail@gmail.com</p>

        <div className={classes.socialContainer}>
          <SocialIcons />
        </div>
      </div>
      <div className={classes.footerPart}>
        <ContactForm />
        <div className={classes.processContainer}>
          <h6 className={classes.processHeader}>Next Steps</h6>
        </div>
        <div className={classes.processContainer}>
          <div className={classes.timeline}>
            {steps.map((step, i) => (
              <div key={i} className={classes.step}>
                <h4 className={classes.title}>{step.title}</h4>
                <p className={classes.description}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
