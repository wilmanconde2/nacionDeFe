// src/app/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import MinistriesSection from '@/components/sections/MinistriesSection';
import EventsSection from '@/components/sections/EventsSection';
import LocationSection from '@/components/sections/LocationSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='home-page'>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ScheduleSection />
        <MinistriesSection />
        <EventsSection />
        <LocationSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
