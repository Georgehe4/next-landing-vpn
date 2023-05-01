import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <SeoHead title='Practice IP' />
      <Layout>
        <Hero />
        <Feature />
        {/*<Pricing />*/}
      </Layout>
      
      <Analytics/>
    </>
  );
}
