"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الخبرات المهنية</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            مسيرتي المهنية في تطوير البرمجيات والشركات التي عملت بها.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block transform md:translate-x-px"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <h4 className="text-gray-500 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-600 leading-relaxed text-right">{exp.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg border-4 border-white z-10 relative">
                  <Briefcase size={24} />
                </div>
                
                {/* Empty div for spacing on the other side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
