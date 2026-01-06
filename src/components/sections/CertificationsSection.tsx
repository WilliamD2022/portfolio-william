import { Award, GraduationCap, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language";

const CertificationsSection = () => {
  const { language } = useLanguage();
  const copy = {
    pt: {
      eyebrow: "Formação",
      titlePrefix: "Certificações &",
      titleAccent: " Educação",
      educationTitle: "Educação",
      certificationsTitle: "Certificações",
      focusTitle: "Áreas de foco para certificações:",
      languagesTitle: "Idiomas",
      portuguese: "Português",
      native: "Nativo",
      english: "Inglês",
      englishLevel: "Inglês particular (B1)",
      yearsLabel: "Anos de Experiência",
      projectsLabel: "Projetos Entregues",
      certifications: [
        {
          icon: Languages,
          title: "Curso de Comunicação entre Sistemas",
          issuer: "Full Cycle",
          year: "dez/2025",
        },
        {
          icon: Languages,
          title: "Curso de Domain Driven Design",
          issuer: "Full Cycle",
          year: "dez/2025",
        },
        {
          icon: Languages,
          title: "Curso de SOLID Express",
          issuer: "Full Cycle",
          year: "dez/2025",
        },
        {
          icon: Languages,
          title: "Trilha AWS Cloud Practitioner",
          issuer: "act digital",
          year: "dez/2025",
        },
        {
          icon: Languages,
          title: "Ignição Microsserviços",
          issuer: "AlgaWorks",
          year: "nov/2025",
          description:
            "Spring Boot, Spring Cloud, WebFlux, JPA, PostgreSQL e microsserviços.",
        },
        {
          icon: Languages,
          title: "Banco de Dados e SQL",
          issuer: "AlgaWorks",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Cloud Computing",
          issuer: "Great Learning",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Curso de Docker",
          issuer: "Full Cycle",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Fundamentos da Arquitetura de Software",
          issuer: "Full Cycle",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Getting Started with Notebooks",
          issuer: "Datadog",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Ignição Spring REST",
          issuer: "AlgaWorks",
          year: "nov/2025",
          description:
            "API REST com Spring Boot, JPA, Flyway, validações e tratamento de erros.",
        },
        {
          icon: Languages,
          title: "Introdução a Inteligência Artificial Generativa",
          issuer: "act digital",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "Lógica de Programação com Java",
          issuer: "AlgaWorks",
          year: "nov/2025",
        },
        {
          icon: Languages,
          title: "The Datadog Learning Center",
          issuer: "Datadog",
          year: "nov/2025",
        },
      ],
      education: [
        {
          degree: "Pós-Graduação em Desenvolvimento de Software (Java Elite)",
          institution: "UNIPDS",
          period: "nov/2025",
          description:
            "Formação avançada em engenharia de software com Java, com foco em arquitetura, microsserviços, APIs REST, segurança e cloud.",
        },
        {
          degree: "Pós-Graduação em Engenharia da Qualidade de Software",
          institution: "Senac Brasil",
          period: "2016 – 2017",
          description:
            "Formado. Ênfase em aprendizagem ativa, interdisciplinaridade e competências aplicadas ao perfil do egresso.",
        },
        {
          degree: "Gerenciamento de Projetos e Gestão da Qualidade em TI",
          institution: "Senac Brasil",
          period: "2015",
          description:
            "Formado. Extensão com boas práticas PMI aplicadas à qualidade e planejamento de projetos.",
        },
        {
          degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
          institution: "UNINOVE",
          period: "2011 – 2014",
          description:
            "Formado. Base sólida em lógica, programação, metodologias de software e laboratórios de desenvolvimento.",
        },
      ],
      skills: [
        "AWS Cloud Services",
        "Java Certification Path",
        "Spring Professional",
        "Kubernetes Administration",
        "Clean Architecture",
        "Domain-Driven Design",
      ],
    },
    en: {
      eyebrow: "Education",
      titlePrefix: "Certifications &",
      titleAccent: " Education",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
      focusTitle: "Focus areas for certifications:",
      languagesTitle: "Languages",
      portuguese: "Portuguese",
      native: "Native",
      english: "English",
      englishLevel: "Private English (B1)",
      yearsLabel: "Years of Experience",
      projectsLabel: "Projects Delivered",
      certifications: [
        {
          icon: Languages,
          title: "Systems Communication Course",
          issuer: "Full Cycle",
          year: "Dec/2025",
        },
        {
          icon: Languages,
          title: "Domain-Driven Design Course",
          issuer: "Full Cycle",
          year: "Dec/2025",
        },
        {
          icon: Languages,
          title: "SOLID Express Course",
          issuer: "Full Cycle",
          year: "Dec/2025",
        },
        {
          icon: Languages,
          title: "AWS Cloud Practitioner Track",
          issuer: "act digital",
          year: "Dec/2025",
        },
        {
          icon: Languages,
          title: "Microservices Ignition",
          issuer: "AlgaWorks",
          year: "Nov/2025",
          description:
            "Spring Boot, Spring Cloud, WebFlux, JPA, PostgreSQL, and microservices.",
        },
        {
          icon: Languages,
          title: "Databases and SQL",
          issuer: "AlgaWorks",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Cloud Computing",
          issuer: "Great Learning",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Docker Course",
          issuer: "Full Cycle",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Software Architecture Fundamentals",
          issuer: "Full Cycle",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Getting Started with Notebooks",
          issuer: "Datadog",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Spring REST Ignition",
          issuer: "AlgaWorks",
          year: "Nov/2025",
          description:
            "REST API with Spring Boot, JPA, Flyway, validations, and error handling.",
        },
        {
          icon: Languages,
          title: "Introduction to Generative AI",
          issuer: "act digital",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "Programming Logic with Java",
          issuer: "AlgaWorks",
          year: "Nov/2025",
        },
        {
          icon: Languages,
          title: "The Datadog Learning Center",
          issuer: "Datadog",
          year: "Nov/2025",
        },
      ],
      education: [
        {
          degree: "Postgraduate in Software Development (Java Elite)",
          institution: "UNIPDS",
          period: "Nov/2025",
          description:
            "Advanced software engineering program with Java, focused on architecture, microservices, REST APIs, security, and cloud.",
        },
        {
          degree: "Postgraduate in Software Quality Engineering",
          institution: "Senac Brasil",
          period: "2016 – 2017",
          description:
            "Graduated. Emphasis on active learning, interdisciplinarity, and skills aligned with the graduate profile.",
        },
        {
          degree: "Project Management and IT Quality Management",
          institution: "Senac Brasil",
          period: "2015",
          description:
            "Graduated. Extension program with PMI best practices applied to quality and project planning.",
        },
        {
          degree: "Technology in Systems Analysis and Development",
          institution: "UNINOVE",
          period: "2011 – 2014",
          description:
            "Graduated. Solid foundation in logic, programming, software methodologies, and development labs.",
        },
      ],
      skills: [
        "AWS Cloud Services",
        "Java Certification Path",
        "Spring Professional",
        "Kubernetes Administration",
        "Clean Architecture",
        "Domain-Driven Design",
      ],
    },
  } as const;
  const text = copy[language];
  const certifications = text.certifications;
  const education = text.education;
  const skills = text.skills;

  return (
    <section id="certifications" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            {text.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {text.titlePrefix}
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent">
              {text.titleAccent}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {text.educationTitle}
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm text-primary font-mono mb-1">{edu.period}</p>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  {edu.description ? (
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {text.certificationsTitle}
              </h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.title} className="block border-l-2 border-accent/30 pl-4">
                  <p className="text-sm text-accent font-mono mb-1">{cert.year}</p>
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.description ? (
                    <p className="text-sm text-primary mt-1">{cert.description}</p>
                  ) : null}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">
                  {text.focusTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Stats */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {text.languagesTitle}
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">
                    {text.portuguese}
                  </span>
                  <span className="text-primary font-mono text-sm">
                    {text.native}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">
                    {text.english}
                  </span>
                  <span className="text-primary font-mono text-sm">
                    {text.englishLevel}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                  <div className="h-full w-[45%] bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pt-6 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">
                      {text.yearsLabel}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <p className="text-3xl font-bold text-accent">50+</p>
                    <p className="text-sm text-muted-foreground">
                      {text.projectsLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
