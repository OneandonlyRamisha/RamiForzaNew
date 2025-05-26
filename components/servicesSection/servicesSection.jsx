import React from "react";
import { servicesData } from "./servicesData";
import ServiceTabs from "./servicesTabs";
import classes from "./servicesSection.module.css";

export default function ServicesSection() {
  const defaultKey = Object.keys(servicesData)[0];
  return (
    <section id="services" className={classes.servicesSection}>
      <div className={classes.headersContainer}>
        <h2 className={classes.header}>Services</h2>
        <h3 className={classes.subHeader}>
          We Specialize In Following Services
        </h3>
      </div>
      <ServiceTabs defaultKey={defaultKey} />
    </section>
  );
}
