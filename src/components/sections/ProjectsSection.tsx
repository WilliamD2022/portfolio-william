import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const copy = {
    pt: {
      eyebrow: "Portfolio",
      titlePrefix: "Projetos em",
      titleAccent: " Destaque",
      description:
        "Uma seleção de projetos que demonstram minhas habilidades em backend, cloud e automação",
      featuredLabel: "Destaque",
      viewOnGithub: "Ver no GitHub",
      viewAll: "Ver Todos os Projetos",
      projects: [
        {
          name: "ISO8583 Simulador",
          description:
            "Simulador para mensagens ISO 8583, padrão internacional para transações financeiras. Ferramenta essencial para testes de integração bancária.",
          technologies: ["Java", "ISO 8583", "Financial Systems"],
          github: "https://github.com/WilliamD2022/iso8583-simulador",
          featured: true,
        },
        {
          name: "AlgaTransito API",
          description:
            "API REST completa para gestão de trânsito, desenvolvida com Spring Boot e boas práticas de arquitetura.",
          technologies: ["Java", "Spring Boot", "REST API"],
          github: "https://github.com/WilliamD2022/algatransito-api",
          featured: true,
        },
        {
          name: "AlgaDelivery",
          description:
            "Sistema de delivery com arquitetura de microsserviços, demonstrando padrões de design e integração.",
          technologies: ["Java", "Microservices", "Spring Boot"],
          github: "https://github.com/WilliamD2022/AlgaDelivery",
          featured: true,
        },
        {
          name: "Login Test - CI/CD",
          description:
            "Projeto demonstrando pipeline CI/CD com GitHub Actions, automação de testes e deploy contínuo.",
          technologies: ["Java", "GitHub Actions", "CI/CD"],
          github: "https://github.com/WilliamD2022/logintest",
          featured: false,
        },
        {
          name: "Automação REST Assured",
          description:
            "Suite de testes automatizados para APIs REST utilizando REST Assured e Java.",
          technologies: ["Java", "REST Assured", "API Testing"],
          github: "https://github.com/WilliamD2022/Automacao-teste-rast-assured-java",
          featured: false,
        },
        {
          name: "Automação Cypress",
          description:
            "Framework de testes E2E com Cypress para validação de interfaces web.",
          technologies: ["JavaScript", "Cypress", "E2E Testing"],
          github: "https://github.com/WilliamD2022/Automacao-teste-cypress",
          featured: false,
        },
      ],
    },
    en: {
      eyebrow: "Portfolio",
      titlePrefix: "Featured",
      titleAccent: " Projects",
      description:
        "A selection of projects that showcase my skills in backend, cloud, and automation",
      featuredLabel: "Featured",
      viewOnGithub: "View on GitHub",
      viewAll: "View All Projects",
      projects: [
        {
          name: "ISO8583 Simulator",
          description:
            "Simulator for ISO 8583 messages, the international standard for financial transactions. Essential tool for bank integration testing.",
          technologies: ["Java", "ISO 8583", "Financial Systems"],
          github: "https://github.com/WilliamD2022/iso8583-simulador",
          featured: true,
        },
        {
          name: "AlgaTransito API",
          description:
            "Complete REST API for traffic management, built with Spring Boot and solid architectural practices.",
          technologies: ["Java", "Spring Boot", "REST API"],
          github: "https://github.com/WilliamD2022/algatransito-api",
          featured: true,
        },
        {
          name: "AlgaDelivery",
          description:
            "Delivery system with microservices architecture, showcasing design patterns and integration.",
          technologies: ["Java", "Microservices", "Spring Boot"],
          github: "https://github.com/WilliamD2022/AlgaDelivery",
          featured: true,
        },
        {
          name: "Login Test - CI/CD",
          description:
            "Project demonstrating a CI/CD pipeline with GitHub Actions, test automation, and continuous deployment.",
          technologies: ["Java", "GitHub Actions", "CI/CD"],
          github: "https://github.com/WilliamD2022/logintest",
          featured: false,
        },
        {
          name: "REST Assured Automation",
          description:
            "Automated test suite for REST APIs using REST Assured and Java.",
          technologies: ["Java", "REST Assured", "API Testing"],
          github: "https://github.com/WilliamD2022/Automacao-teste-rast-assured-java",
          featured: false,
        },
        {
          name: "Cypress Automation",
          description:
            "E2E testing framework with Cypress for web interface validation.",
          technologies: ["JavaScript", "Cypress", "E2E Testing"],
          github: "https://github.com/WilliamD2022/Automacao-teste-cypress",
          featured: false,
        },
      ],
    },
  } as const;
  const text = copy[language];
  const projects = text.projects;

  return (
    <section id="projects" className="section-container">
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {text.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className={`glass-card p-6 group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)] transition-all duration-300 flex flex-col ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Github className="w-6 h-6" />
                </div>
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    {text.featuredLabel}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                {text.viewOnGithub}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-border hover:border-primary/50 hover:bg-primary/5"
            asChild
          >
            <a 
              href="https://github.com/WilliamD2022?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {text.viewAll}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
