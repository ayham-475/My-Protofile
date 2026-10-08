import { Cairo } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata = {
  title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
  description: portfolioData.personalInfo.bio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.variable} font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
