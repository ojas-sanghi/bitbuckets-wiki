import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a href={withBaseUrl('design/SOLIDWORKS-Installation')}> Design </a>,
    imageUrl: 'img/undraw_design.svg',
    description: (
      <>
        What's 'clearance'?.
      </>
    ),
    // link: 'design/SOLIDWORKS-Installation'
  },
  {
    title: <a href={withBaseUrl('software/Software-Getting-Started')}> Software </a>,
    imageUrl: 'img/undraw_software.svg',
    description: (
      <>
        Hacker code hacker code
      </>
    ),
  },
  {
    title: <a href={withBaseUrl('fabrication/fab-placeholder')}> Fabrication </a>,
    imageUrl: 'img/undraw_fab.svg',
    description: (
      <>
        Watch out: lasers
      </>
    ),
  },
  {
    title: <a href={withBaseUrl('electrical/electric-placeholder')}> Electrical </a>,
    imageUrl: 'img/undraw_circuit.svg',
    description: (
      <>
        BZZZZZ
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('docs/overview')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description, link }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    {/* <h3><a href={withBaseUrl({link})}>{title}</a></h3> */}
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;