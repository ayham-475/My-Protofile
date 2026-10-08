"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "البريد الإلكتروني",
      value: portfolioData.personalInfo.email,
      link: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "رقم الهاتف",
      value: portfolioData.personalInfo.phone,
      link: `tel:${portfolioData.personalInfo.phone}`
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "الموقع",
      value: portfolioData.personalInfo.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معي</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            أنا متاح دائماً لمناقشة المشاريع الجديدة والفرص المتاحة.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* معلومات التواصل */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">دعنا نتحدث عن مشروعك القادم</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-lg font-medium hover:text-blue-400 transition-colors" dir="ltr" className="block text-right">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div 
            className="flex-1 bg-gray-800 p-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">الاسم</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="اسمك الكريم" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="example@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">الموضوع</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="موضوع الرسالة" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">الرسالة</label>
                <textarea rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="كيف يمكنني مساعدتك؟"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <span>إرسال الرسالة</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
