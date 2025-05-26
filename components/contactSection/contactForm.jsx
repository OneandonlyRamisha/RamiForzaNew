import classes from "./contactForm.module.css";

export default function ContactForm() {
  return (
    <div className={classes.formContainer}>
      <div className={classes.headerContainer}>
        <i className={"material-icons" + " " + classes.icon}>send</i>
        <h4 className={classes.header}>
          Write us a few words about your project and we'll prepare a personal
          proposal for you within 24-36 hours.
        </h4>
      </div>
      <form
        action="https://formsubmit.co/rami.forza.contact@gmail.com
"
        method="POST"
        className={classes.form}
      >
        <div className={classes.group}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={classes.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={classes.input}
          />
        </div>
        <div className={classes.group}>
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            className={classes.input}
          />

          <select name="budget" className={classes.input} required>
            <option value="">Select Budget</option>
            <option value="500-1000">$500 – $1,000</option>
            <option value="1000-5000">$1,000 – $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Type your message..."
          required
          className={classes.textarea}
        />

        <input
          type="file"
          name="file"
          placeholder="Drop A File Here"
          className={classes.file}
        />

        <button type="submit" className={classes.cta}>
          Send Message
        </button>
      </form>
    </div>
  );
}
