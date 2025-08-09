import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Videos from '@/components/Videos';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Videos />
      <Footer />
    </main>
  );
}
