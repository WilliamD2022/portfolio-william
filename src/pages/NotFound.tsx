import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/language";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const copy = {
    pt: {
      title: "404",
      message: "Ops! Página não encontrada",
      cta: "Voltar ao início",
    },
    en: {
      title: "404",
      message: "Oops! Page not found",
      cta: "Return to Home",
    },
  } as const;
  const text = copy[language];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{text.title}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{text.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {text.cta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
