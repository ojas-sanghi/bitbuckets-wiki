import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Bit Buckets Robotics is a community-based middle and high-school STEM team',
    imageUrl: 'img/undraw_robot.svg',
    description: (
      <>
        We compete in robotics competitions and other technical challenges
      </>
    ),
  },
  {
    title: "In addition to hands-on engineering, students experience all aspects of running a team",
    imageUrl: 'img/undraw_teamwork.svg',
    description: (
      <>
        Including leadership, teamwork, and time-management. Students also help with fundraising and competition logistics
      </>
    ),
  },
  {
    title: 'Our students get to work with U of A professors and top engineers from around the world',
    imageUrl: 'img/undraw_university.svg',
    description: (
      <>
        Students attend elite colleges and universities such as Harvard, MIT, Stanford, Carnegie Mellon, and UC Berkeley
      </>
    ),
  }
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
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={useBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
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