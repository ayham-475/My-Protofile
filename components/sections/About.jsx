"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Layout } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Layout className="text-blue-500" size={32} />,
      title: "تطوير واجهات المستخدم",
      description: "بناء واجهات مستخدم تفاعلية وجذابة باستخدام أحدث تقنيات الويب مثل React و Next.js لضمان تجربة مستخدم ممتازة."
    },
    {
      icon: <Server className="text-cyan-500" size={32} />,
      title: "تطوير النظم الخلفية (Backend)",
      description: "تصميم وبناء خوادم وقواعد بيانات قوية وقابلة للتوسع لدعم التطبيقات الكبيرة ومعالجة البيانات بأمان وسرعة."
    },
    {
      icon: <Smartphone className="text-indigo-500" size={32} />,
      title: "تطبيقات متجاوبة",
      description: "ضمان عمل التطبيقات والمواقع بشكل مثالي على جميع الأجهزة والشاشات من الهواتف الذكية إلى أجهزة سطح المكتب."
    },
    {
      icon: <Code className="text-teal-500" size={32} />,
      title: "هندسة البرمجيات",
      description: "تطبيق أفضل ممارسات هندسة البرمجيات وكتابة كود نظيف وقابل للصيانة لضمان جودة المشاريع على المدى الطويل."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">نبذة عني</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            كـ مهندس برمجيات، أؤمن بأن الكود ليس مجرد سطور برمجية بل هو حلول واقعية للمشكلات. أجمع بين التصميم الجميل والأداء القوي لتقديم منتجات تقنية متكاملة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
