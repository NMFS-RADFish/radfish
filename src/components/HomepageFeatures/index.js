import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        RADFish provides a simple standard for modern frontend web development
        at NOAA.
      </>
    ),
  },
  {
    title: "Convenient Tooling",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        RADFish enables common development tasks like on-device storage and
        state management.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React examples.
        RADFish applications are built using modern web best practices.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
