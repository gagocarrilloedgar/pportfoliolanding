import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="Conectamos empresas y talento"
        content="Simplificamos los procesos de atracción de talento conectando empresa, equipo y candidato."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
