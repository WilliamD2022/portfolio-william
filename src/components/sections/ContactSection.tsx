import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language";

const ContactSection = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const copy = {
    pt: {
      eyebrow: "Contato",
      titlePrefix: "Vamos",
      titleAccent: " Conversar",
      description:
        "Interessado em colaborar ou tem alguma pergunta? Ficarei feliz em conversar sobre seu próximo projeto.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "seu@email.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Conte-me sobre seu projeto...",
      sending: "Enviando...",
      send: "Enviar Mensagem",
      toastTitle: "Mensagem enviada!",
      toastDescription: "Obrigado pelo contato. Responderei em breve.",
      linksTitle: "Links de Contato",
      ctaTitle: "Pronto para começar?",
      ctaDescription:
        "Estou disponível para projetos freelance, consultoria em arquitetura de software e oportunidades CLT/PJ.",
      ctaButton: "Conectar no LinkedIn",
      contactLinks: [
        {
          icon: Github,
          label: "GitHub",
          value: "WilliamD2022",
          href: "https://github.com/WilliamD2022",
        },
        {
          icon: Linkedin,
          label: "LinkedIn",
          value: "/williamdominguesbarbosa",
          href: "https://www.linkedin.com/in/williamdominguesbarbosa/",
        },
        {
          icon: Mail,
          label: "Email",
          value: "Entrar em contato",
          href: "mailto:contact@williamdbarbosa.dev",
        },
        {
          icon: MapPin,
          label: "Localização",
          value: "Atibaia, SP - Brasil",
          href: null,
        },
      ],
    },
    en: {
      eyebrow: "Contact",
      titlePrefix: "Let's",
      titleAccent: " Talk",
      description:
        "Interested in collaborating or have a question? I'd be happy to talk about your next project.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sending: "Sending...",
      send: "Send Message",
      toastTitle: "Message sent!",
      toastDescription: "Thanks for reaching out. I'll get back to you soon.",
      linksTitle: "Contact Links",
      ctaTitle: "Ready to get started?",
      ctaDescription:
        "I’m available for freelance projects, software architecture consulting, and full-time/PJ opportunities.",
      ctaButton: "Connect on LinkedIn",
      contactLinks: [
        {
          icon: Github,
          label: "GitHub",
          value: "WilliamD2022",
          href: "https://github.com/WilliamD2022",
        },
        {
          icon: Linkedin,
          label: "LinkedIn",
          value: "/williamdominguesbarbosa",
          href: "https://www.linkedin.com/in/williamdominguesbarbosa/",
        },
        {
          icon: Mail,
          label: "Email",
          value: "Get in touch",
          href: "mailto:contact@williamdbarbosa.dev",
        },
        {
          icon: MapPin,
          label: "Location",
          value: "Atibaia, SP - Brazil",
          href: null,
        },
      ],
    },
  } as const;
  const text = copy[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: text.toastTitle,
      description: text.toastDescription,
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = text.contactLinks;

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {text.nameLabel}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={text.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {text.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={text.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {text.messageLabel}
                </label>
                <Textarea
                  id="message"
                  placeholder={text.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_hsl(270_100%_65%/0.3)] hover:shadow-[0_0_30px_hsl(270_100%_65%/0.5)] transition-all duration-300"
              >
                {isSubmitting ? (
                  text.sending
                ) : (
                  <>
                    {text.send}
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {text.linksTitle}
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <div key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {link.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-transparent">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {text.ctaTitle}
              </h3>
              <p className="text-muted-foreground mb-6">
                {text.ctaDescription}
              </p>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <a 
                  href="https://www.linkedin.com/in/williamdominguesbarbosa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {text.ctaButton}
                  <Linkedin className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
