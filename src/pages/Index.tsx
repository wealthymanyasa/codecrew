
import React from 'react';
import { Layout } from '@/components/Layout';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import EngineeringDashboard from '@/components/EngineeringDashboard';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Services />
      <EngineeringDashboard />
      <Testimonials />
    </Layout>
  );
};

export default Index;
