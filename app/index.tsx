import React from 'react';

import Contact from '../components/Contact';
import Features from '../components/Features';
import Hero from '../components/Hero';
import PageShell from '../components/PageShell';
import Platform from '../components/Platform';
import Pricing from '../components/Pricing';
import SplitSection from '../components/SplitSection';
import Strip from '../components/Strip';
import { SPLIT_IMAGES } from '../constants/theme';

export default function Index() {
  return (
    <PageShell>
      <Hero />
      <Strip />
      <Features />

      <SplitSection
        image={SPLIT_IMAGES.fieldOps}
        label="Location-aware scouting"
        headline={'From farm to spot,\nwith structure at every step'}
        body1="The system organizes work into farms, sites, bays, benches, and spot checks so every observation has a clear location."
        body2="That structure makes it easier to review pressure by area, compare sessions, and assign follow-up work with confidence."
        bgColor="#F5F2EB"
      />

      <SplitSection
        image={SPLIT_IMAGES.greenhouse}
        label="Manager visibility"
        headline={'Threshold alerts and\nheat maps for faster action'}
        body1="Managers can review severity by location, compare weekly trends, and focus on the areas that need intervention first."
        body2="Treatments, notes, and recommendations stay attached to the scouting record so the team can track what changed over time."
        reverse
        bgColor="#FFFFFF"
      />

      <Platform />
      <Pricing />
      <Contact />
    </PageShell>
  );
}
