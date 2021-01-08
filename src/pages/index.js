import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Pourquoi Dico Data ?',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        L'idée derrière Dico Data est de centraliser toutes les défintions importantes
        en data science.
      </>
    ),
  },
  {
    title: 'Quels sont les domaines couverts dans ce glossaire ?',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       Dans ce glossaire vous trouverez défintions concernant la data science. 
       Chose qui implique qu'il y a aussi des défintions de machine learning, de statistiques.
      </>
    ),
  },
  {
    title: 'Comment contribuer ?',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Simple. Faire un fork du repo git, ajouter/modifier des défintions dans le dossier /docs et faire une pull request.
        La démarche détaillée est présentée dans le fichier readMe. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Aller sur le glossaire
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
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
