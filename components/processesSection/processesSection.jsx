import classes from "./processesSection.module.css";
import { processesData } from "./processesData";

export default function PrecessesSection() {
  return (
    <section id="process" className={classes.processSection}>
      <h2 className={classes.servicesSectionHeader}>
        <span className={classes.outlinedFont}>just </span> two weeks
        <span className={classes.outlinedFont}> from </span>
        <br className={classes.notAvaible} />
        start &rarr; <span className={classes.outlinedFont}>to </span> Finish
      </h2>
      <div className={classes.processContainer}>
        {Object.entries(processesData).map(([key, value]) => (
          <div key={key} className={classes.processItem}>
            <i className="material-icons">{value.iconName}</i>
            <h6 className={classes.processHeader}>{value.name}</h6>
            <p className={classes.processDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
