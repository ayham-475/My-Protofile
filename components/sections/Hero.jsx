"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-semibold mb-4 tracking-wider">
              مرحباً بك في موقعي الشخصي
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              أنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{portfolioData.personalInfo.name}</span>
              <br />
              {portfolioData.personalInfo.role.split(" | ")[0]}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                شاهد أعمالي
                <ArrowLeft size={20} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                تواصل معي
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              {/* صورة مؤقتة */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-lg">
                [صورة شخصية]
              </div>
            </div>
            
            {/* أشكال زينة */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
