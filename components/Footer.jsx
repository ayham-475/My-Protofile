import { Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t py-12" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-gray-500 text-sm">
              {portfolioData.personalInfo.role}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={portfolioData.personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} {portfolioData.personalInfo.name}. جميع الحقوق محفوظة.</p>
          <p className="mt-2 md:mt-0">تم التطوير باستخدام Next.js و Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
