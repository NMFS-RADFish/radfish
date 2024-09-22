import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function RADFishHero() {
  return (
    <section className={clsx(styles.hero, "text--center")}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12 padding-horiz--md")}>
            <h3 className={styles.heroTitle}>
              Introducing the React Application Development Framework for
              Fisheries (RADFish)
            </h3>
            <p className={styles.heroSubtitle}>text</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        RADFish provides a simple standard for modern frontend web development
        at NOAA.
      </>
    ),
  },
  {
    title: "Convenient Tooling",
    description: (
      <>
        RADFish enables common development tasks like on-device storage and
        state management.
      </>
    ),
  },
  {
    title: "Powered by React",
    description: (
      <>
        Extend or customize your website layout by reusing React examples.
        RADFish applications are built using modern web best practices.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* Card container */}
      <div className={styles.card}>
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <RADFishHero />
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
