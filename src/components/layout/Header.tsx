import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = {
    pt: {
      nav: {
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        experience: "Experiência",
        certifications: "Formação",
        contact: "Contato",
      },
      cta: "Contato",
    },
    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        certifications: "Education",
        contact: "Contact",
      },
      cta: "Contact",
    },
  } as const;
  const text = copy[language];

  const navLinks = [
    { href: "#about", label: text.nav.about },
    { href: "#skills", label: text.nav.skills },
    { href: "#projects", label: text.nav.projects },
    { href: "#experience", label: text.nav.experience },
    { href: "#certifications", label: text.nav.certifications },
    { href: "#contact", label: text.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">W</span>DB
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size="sm"
              variant={language === "pt" ? "default" : "outline"}
              className={
                language === "pt"
                  ? "bg-secondary/80 text-foreground hover:bg-secondary"
                  : "border-border/50 text-foreground hover:bg-secondary/60"
              }
              onClick={() => setLanguage("pt")}
            >
              PT
            </Button>
            <Button
              size="sm"
              variant={language === "en" ? "default" : "outline"}
              className={
                language === "en"
                  ? "bg-secondary/80 text-foreground hover:bg-secondary"
                  : "border-border/50 text-foreground hover:bg-secondary/60"
              }
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              {text.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                {text.cta}
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant={language === "pt" ? "default" : "outline"}
                  className={
                    language === "pt"
                      ? "bg-secondary/80 text-foreground hover:bg-secondary"
                      : "border-border/50 text-foreground hover:bg-secondary/60"
                  }
                  onClick={() => setLanguage("pt")}
                >
                  PT
                </Button>
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  className={
                    language === "en"
                      ? "bg-secondary/80 text-foreground hover:bg-secondary"
                      : "border-border/50 text-foreground hover:bg-secondary/60"
                  }
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
