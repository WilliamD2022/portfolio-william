import { Code2, Cloud, Database, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/language";

const AboutSection = () => {
  const { language } = useLanguage();
  const copy = {
    pt: {
      eyebrow: "Sobre Mim",
      titlePrefix: "Construindo o futuro com",
      titleAccent: " código",
      bio: [
        "Sou um ",
        "Desenvolvedor Java Backend",
        ", com mais de 15 anos de experiência no desenvolvimento de soluções escaláveis, performáticas e seguras, atuando em ambientes complexos e de alta disponibilidade. Minha trajetória inclui projetos críticos no ",
        "setor financeiro",
        ", envolvendo sistemas de crédito, pagamentos, Pix, Open Finance e análise de risco.",
      ],
      bioSecond:
        "Tenho forte atuação em Clean Architecture, DDD e princípios SOLID, garantindo código sustentável e de fácil manutenção. Minha experiência abrange sistemas críticos em ambientes financeiros e industriais, além de plataformas de dados e integração.",
      bioThird:
        "Atualmente focado em desenvolvimento e arquitetura de sistemas, cloud computing (AWS), automação de testes e práticas DevOps modernas.",
      highlights: [
        {
          icon: Code2,
          title: "Especialista Backend",
          description:
            "Especialista em Java 17+, Spring Boot, Quarkus  e arquiteturas de microsserviços",
        },
        {
          icon: Cloud,
          title: "Cloud e DevOps",
          description: "AWS, Docker, Kubernetes e pipelines CI/CD automatizados",
        },
        {
          icon: Database,
          title: "Arquitetura de Dados",
          description: "PostgreSQL, MySQL, Redis e modelagem de dados escalável",
        },
        {
          icon: Rocket,
          title: "Clean Architecture",
          description: "DDD, SOLID, TDD e práticas de código limpo e sustentável",
        },
      ],
    },
    en: {
      eyebrow: "About Me",
      titlePrefix: "Building the future with",
      titleAccent: " code",
      bio: [
        "I am a ",
        "Java Backend Developer",
        ", with 15+ years of experience building scalable, high-performance, and secure solutions in complex, high-availability environments. My journey includes mission-critical projects in the ",
        "financial sector",
        ", involving credit systems, payments, Pix, Open Finance, and risk analysis.",
      ],
      bioSecond:
        "I work heavily with Clean Architecture, DDD, and SOLID principles, ensuring sustainable, maintainable code. My experience spans critical systems in financial and industrial environments, as well as data and integration platforms.",
      bioThird:
        "Currently focused on systems development and architecture, cloud computing (AWS), test automation, and modern DevOps practices.",
      highlights: [
        {
          icon: Code2,
          title: "Backend Expert",
          description:
            "Specialized in Java 17+, Spring Boot, and microservices architectures",
        },
        {
          icon: Cloud,
          title: "Cloud & DevOps",
          description: "AWS, Docker, Kubernetes, and automated CI/CD pipelines",
        },
        {
          icon: Database,
          title: "Data Architecture",
          description: "PostgreSQL, MySQL, Redis, and scalable data modeling",
        },
        {
          icon: Rocket,
          title: "Clean Architecture",
          description: "DDD, SOLID, TDD, and sustainable clean code practices",
        },
      ],
    },
  } as const;
  const text = copy[language];
  const highlights = text.highlights;

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
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

        {/* Bio */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {text.bio[0]}
            <span className="text-foreground font-semibold">{text.bio[1]}</span>
            {text.bio[2]}
            <span className="text-primary">{text.bio[3]}</span>
            {text.bio[4]}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {language === "pt" ? (
              <>
                Tenho forte atuação em{" "}
                <span className="text-accent">Clean Architecture, DDD e princípios SOLID</span>, 
                garantindo código sustentável e de fácil manutenção. Minha experiência abrange sistemas críticos em ambientes financeiros e industriais, além de plataformas de dados e integração.
              </>
            ) : (
              text.bioSecond
            )}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === "pt" ? (
              <>
                Atualmente focado em{" "}
                <span className="text-neon-blue">desenvolvimento e arquitetura de sistemas</span>,
                {" "}cloud computing (AWS), automação de testes e práticas DevOps modernas.
              </>
            ) : (
              text.bioThird
            )}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="glass-card p-6 group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
