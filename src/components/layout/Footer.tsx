import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const copy = {
    pt: {
      madeWith: "Feito com",
      using: "usando React & Tailwind",
    },
    en: {
      madeWith: "Made with",
      using: "using React & Tailwind",
    },
  } as const;
  const text = copy[language];

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">W</span>DB
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} William Domingues Barbosa
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/WilliamD2022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/williamdominguesbarbosa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@williamdbarbosa.dev"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {text.madeWith}
            <Heart className="w-4 h-4 text-primary fill-primary" />
            {text.using}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
