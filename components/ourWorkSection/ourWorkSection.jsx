import classes from "./ourWorkSection.module.css";
import { workData } from "./workData";
import Image from "next/image";

export default function OurWorkSection() {
  return (
    <section className={classes.ourWorkSection} id="ourWork">
      <div className={classes.headerContainer}>
        <h4 className={classes.header}>Our Work</h4>
        <h6 className={classes.subHeader}>
          A Glimpse Into Our Delivered Results
        </h6>
      </div>
      <div className={classes.ourWorkContainer}>
        {workData.map((sample) => (
          <div key={sample.name} className={classes.sampleContainer}>
            <div className={classes.infoContainer}>
              <div className={classes.sampleSubHeaderContainer}>
                <h6 className={classes.sampleSubHeader}>{sample.name}</h6>
                <h6 className={classes.sampleSubHeader}>&middot;</h6>
                <h6 className={classes.sampleSUbHeader}>{sample.year}</h6>
              </div>
              <h4 className={classes.sampleHeader}>{sample.title}</h4>
              <ul className={classes.resultsListContainer}>
                {sample.results.map((result) => (
                  <li className={classes.resultsContainer} key={result.title}>
                    <i className="material-icons">check_circle</i>
                    <h6 className={classes.result}>{result.title}</h6>
                  </li>
                ))}
              </ul>
              <a className={classes.cta} target="__blank" href={sample.link}>
                Visit Live Site &#8599;
              </a>
            </div>
            <div className={classes.imgContainer}>
              <Image
                src={sample.img}
                fill
                className={classes.sampleImage}
                alt="website image"
                priority
                sizes="(max-width: 600px) 100vw,
         (max-width: 1024px) 100vw,
         50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
