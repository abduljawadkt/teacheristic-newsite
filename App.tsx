import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeacherSegment, SchoolSegment } from './components/Segments';
import { Programs } from './components/Programs';
import { ReadinessSystem } from './components/ReadinessSystem';
import { MicroCourses } from './components/MicroCourses';
import { Testimonials } from './components/Testimonials';
import { FooterCTA } from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <TeacherSegment />
        <SchoolSegment />
        <Programs />
        <ReadinessSystem />
        <MicroCourses />
        <Testimonials />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;