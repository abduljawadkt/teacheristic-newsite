import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

const courses = [
  "Story-based teaching",
  "Creative lesson design",
  "Student engagement",
  "Classroom management",
  "Digital teaching essentials",
  "Assessment techniques"
];

export const MicroCourses: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-lime-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills That Make You Stand Out</h2>
          <p className="text-slate-600 mb-10">In just minutes, learn:</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white px-5 py-3 rounded-full shadow-sm text-slate-700 font-medium flex items-center border-2 border-transparent hover:border-teal-300 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2" />
              {course}
            </motion.div>
          ))}
        </div>

        <Button variant="outline" className="bg-white hover:bg-white border-teal-200 text-teal-700" icon>Browse Micro Courses</Button>
      </div>
    </section>
  );
};