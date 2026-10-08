export const portfolioData = {
  personalInfo: {
    name: "اسم المهندس",
    role: "مهندس برمجيات محترف | Professional Software Engineer",
    bio: "أنا مهندس برمجيات متخصص في بناء تطبيقات ويب حديثة وعالية الأداء. أمتلك خبرة واسعة في تصميم الحلول البرمجية المعقدة وتحويل الأفكار إلى منتجات واقعية تلبي احتياجات المستخدمين والشركات.",
    email: "contact@example.com",
    phone: "+966 5X XXX XXXX",
    location: "الرياض، المملكة العربية السعودية",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
  skills: [
    { category: "Frontend", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Agile Methodologies", "Communication"] }
  ],
  experience: [
    {
      id: 1,
      title: "مهندس برمجيات أول",
      company: "شركة تقنية رائدة",
      period: "2021 - الحالي",
      description: "قيادة فريق تطوير الويب، تصميم وبناء بنية تطبيقات قابلة للتوسع، وتحسين أداء النظام بنسبة 40%."
    },
    {
      id: 2,
      title: "مطور ويب",
      company: "وكالة إبداعية",
      period: "2018 - 2021",
      description: "تطوير مواقع وتطبيقات تفاعلية لعملاء محليين ودوليين، مع التركيز على تجربة المستخدم (UX) والتصميم المتجاوب."
    }
  ],
  projects: [
    {
      id: 1,
      title: "نظام إدارة الشركات (ERP)",
      description: "نظام سحابي متكامل لإدارة الموارد البشرية والمالية للشركات المتوسطة والصغيرة.",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "منصة تعليمية إلكترونية",
      description: "منصة تتيح للطلاب متابعة الدورات التدريبية والتفاعل مع المدرسين عبر غرف دردشة مباشرة.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "تطبيق تجارة إلكترونية",
      description: "تطبيق جوال وويب لشراء المنتجات مع دعم بوابات الدفع الإلكتروني وتتبع الطلبات.",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#"
    }
  ]
};
