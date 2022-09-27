import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={'header'}>
      <div className={clsx('container', styles.heroBanner)}>
        <h1 className="hero__title">{'Mobile Solution Workshop'}</h1>
        <h1 className="hero__title__2">{'Frequently Asked Questions'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <img
          className="landingPhoto"
          src="img/landingPhoto.jpg"
          alt="Grapefruit slice atop a pile of other slices"
        ></img>
        <div className={clsx('container', styles.FAQContainer)}>
          <h2>{'Is the Mobile Mobile Workshop for rent?'}</h2>
          <p>
            {
              'Currently the Mobile Solution Workshop is not a service provided from Leuphana in this sense, instead it is an infrastructure that is used in the context of research projects and teaching. Therefore, events in the Mobile Solution Workshop are part of research projects or project seminars. As a partner in a research project, your are involved in the design of the workshop from the start.'
            }
          </p>
        </div>
        <PrintFAQ />
      </main>
    </Layout>
  );
}
