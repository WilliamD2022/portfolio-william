import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";

const HeroSection = () => {
  const { language } = useLanguage();
  const copy = {
    pt: {
      status: "Disponível para novos projetos",
      titleRole: "Desenvolvedor Java Back end",
      impact:
        "Engenheiro de Software com mais de 15 anos de experiência, atuando no desenvolvimento de soluções escaláveis e na entrega contínua de software em ambientes complexos, distribuídos e de alta disponibilidade.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Contato",
    },
    en: {
      status: "Available for new projects",
      titleRole: "Java Backend Developer",
      impact:
        "Software engineer with 15+ years of experience, building scalable solutions and delivering software continuously in complex, distributed, high-availability environments.",
      ctaProjects: "View Projects",
      ctaContact: "Contact",
    },
  } as const;
  const text = copy[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float animation-delay-400" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            {text.status}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">William</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent">
            Domingues Barbosa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-4 animate-fade-in-up">
          {text.titleRole}
        </p>

        {/* Tech Stack */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
          <span className="text-primary">Java</span> • <span className="text-accent">Spring Boot</span> • <span className="text-accent">Quarkus</span> • <span className="text-neon-blue">AWS</span> • Cloud & DevOps
        </p>

        {/* Impact Statement */}
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          {text.impact}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-[0_0_30px_hsl(270_100%_65%/0.3)] hover:shadow-[0_0_40px_hsl(270_100%_65%/0.5)] transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {text.ctaProjects}
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg font-semibold transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {text.ctaContact}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up">
          <a 
            href="https://github.com/WilliamD2022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270_100%_65%/0.2)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/williamdominguesbarbosa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270_100%_65%/0.2)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          
          <a 
            href="mailto:contact@williamdbarbosa.dev"
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270_100%_65%/0.2)] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
