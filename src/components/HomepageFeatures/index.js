import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Create raw input (info of each of the features)
const FeatureList = [
  {
    title: 'Dynamic visualization',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        MoLöWe allows for interactive visualizations that can be manipulated in real-time to
        enhance explanability and audience interactions.
      </>
    ),
  },
  {
    title: 'Highly customizable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We use Python and Jupyter Notebook, as well as many popular packages such as plotly and
        eCharts as our backbone for MoLöWe.
      </>
    ),
  },
  {
    title: 'Connect everywhere',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        MoLöWe is a browser-based application, which is ideal for delivering and join a presentation from any computer.
      </>
    ),
  },
];

// Define function that map info into a container, for each feature
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Map all features onto the homepage
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
   
      <div className="container">
      <h1 className={styles.headerFeatures}> Why MoLöWe?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
