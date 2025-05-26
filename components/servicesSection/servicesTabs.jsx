"use client";

import React, { useState, useCallback } from "react";
import { servicesData } from "./servicesData";
import classes from "./servicesTabs.module.css";

export default function ServiceTabs({ defaultKey }) {
  const [active, setActive] = useState(defaultKey);
  const { label, icon, description, listItems, img, altText } =
    servicesData[active];

  const onSelect = useCallback((key) => setActive(key), []);
  const entries = Object.entries(servicesData);

  return (
    <div className={classes.servicesContainer}>
      <div className={classes.serviceSelect}>
        {entries.map(([key, { label, icon }]) => {
          const isActive = key === active; // ← per-entry
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={
                `${classes.serviceSelectItem}` +
                (isActive ? ` ${classes.active}` : "")
              }
              aria-current={isActive ? "page" : undefined}
            >
              <i
                className={
                  `material-icons ${classes.serviceIcon}` +
                  (isActive ? ` ${classes.iconActive}` : "") // only this icon
                }
              >
                {icon}
              </i>
              <h4
                className={
                  `${classes.serviceSelectItemHeader}` +
                  (isActive ? ` ${classes.headerActive}` : "")
                }
              >
                {label}
              </h4>
            </button>
          );
        })}
      </div>

      <div className={classes.serviceExplanation}>
        <div className={classes.servicesTextContainer}>
          <h5 className={classes.servicesItemSubheader}>{label}</h5>
          <h4 className={classes.servicesItemHeader}>{label}</h4>
          <p className={classes.servicesItemDescriptions}>{description}</p>
          <ul className={classes.servicesItemList}>
            {listItems.map((item, i) => (
              <li key={i} className={classes.servicesItemListItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.servicesImageContainer}>
          <img src={`/${img}`} alt={altText} className={classes.serviceImg} />
        </div>
      </div>
    </div>
  );
}
