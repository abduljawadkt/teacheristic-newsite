import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeacherSegment, SchoolSegment } from './components/Segments';
import { Programs } from './components/Programs';
import { ReadinessSystem } from './components/ReadinessSystem';
import { MicroCourses } from './components/MicroCourses';
import { Testimonials } from './components/Testimonials';
import { FooterCTA } from './components/FooterCTA';
import { TeacherFormModal, SchoolFormModal } from './components/Forms';

function App() {
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);

  const openTeacherForm = () => setIsTeacherModalOpen(true);
  const openSchoolForm = () => setIsSchoolModalOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100 selection:text-teal-900 relative">
      <Navbar />
      <main>
        <Hero 
          onOpenTeacherForm={openTeacherForm} 
          onOpenSchoolForm={openSchoolForm} 
        />
        <TeacherSegment onOpenForm={openTeacherForm} />
        <SchoolSegment onOpenForm={openSchoolForm} />
        <Programs />
        <ReadinessSystem />
        <MicroCourses />
        <Testimonials />
      </main>
      <FooterCTA 
        onOpenTeacherForm={openTeacherForm} 
        onOpenSchoolForm={openSchoolForm} 
      />

      {/* Modals */}
      <TeacherFormModal 
        isOpen={isTeacherModalOpen} 
        onClose={() => setIsTeacherModalOpen(false)} 
      />
      <SchoolFormModal 
        isOpen={isSchoolModalOpen} 
        onClose={() => setIsSchoolModalOpen(false)} 
      />
    </div>
  );
}

export default App;