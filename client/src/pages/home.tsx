import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Menu, X, Building2, Gavel, FileText, ShieldCheck, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBg from "@assets/generated_images/abstract_geometric_corporate_background_with_blue_and_white_gradients.png";
import logo from "@assets/LeactisSem_título-1_1765286720725.png";

// --- Mock Data ---

const SOLUTIONS = [
  {
    id: "juridico",
    title: "Assessoria Jurídica Estratégica",
    icon: Gavel,
    description: "Atuação consultiva e especializada para apoiar a gestão na tomada de decisões, com foco em segurança jurídica e conformidade normativa.",
    items: [
      { title: "Consultoria Jurídica Empresarial", desc: "Orientação preventiva e estratégica para decisões de negócio." },
      { title: "Tributação e Contabilidade Estratégica", desc: "Assessoria em planejamento tributário e orientação contábil." },
      { title: "Políticas e Normativos Internos", desc: "Desenvolvimento de manuais e diretrizes para padronizar processos." },
      { title: "Análise e Gestão de Riscos", desc: "Mapeamento de riscos legais e operacionais." },
      { title: "Jurídico Interno Terceirizado", desc: "Suporte contínuo às demandas jurídicas rotineiras." }
    ]
  },
  {
    id: "gestao",
    title: "Gestão Estratégica",
    icon: Building2,
    description: "Serviços que organizam rotinas administrativas, estruturam controles e garantem segurança operacional.",
    items: [
      { title: "Departamento Pessoal (DP)", desc: "Gestão completa de admissões, folhas e eSocial." },
      { title: "Gestão de Pessoas", desc: "Suporte na estruturação de práticas de desempenho e cultura." },
      { title: "Governança de Processos", desc: "Organização de fluxos, rotinas e controles essenciais." },
      { title: "Políticas e Procedimentos", desc: "Padronização de tarefas para redução de erros." },
      { title: "Auditoria Administrativa", desc: "Revisão de processos para identificar falhas." }
    ]
  },
  {
    id: "compliance",
    title: "Compliance e Governança",
    icon: ShieldCheck,
    description: "Serviços que fortalecem a integridade institucional, reduzem riscos e sustentam a governança.",
    items: [
      { title: "Programa de Compliance", desc: "Estruturação de modelos de integridade ajustados ao negócio." },
      { title: "Investigações Internas", desc: "Condução técnica e imparcial de apurações." },
      { title: "Adequação à LGPD", desc: "Mapeamento de dados e implementação de práticas." },
      { title: "Due Diligence", desc: "Avaliação de riscos de fornecedores e parceiros." },
      { title: "Treinamentos Corporativos", desc: "Programas customizados para equipes e lideranças." }
    ]
  }
];

const VALUES = [
  { title: "Integridade", desc: "Construímos relacionamentos com ética, transparência e responsabilidade." },
  { title: "Eficiência", desc: "Aplicamos método, análise e rigor técnico em cada solução." },
  { title: "Confiança", desc: "Construímos estruturas que fortalecem credibilidade e segurança institucional." },
  { title: "Comunicação", desc: "Simplificamos o complexo para apoiar decisões estratégicas." }
];

const CLIENT_SECTORS = [
  "Concessionárias de Serviços Públicos", "Institutos Educacionais", "Óleo e Gás", "Agronegócio", "Fitness", 
  "Varejo", "Energia", "Navegação", "Construção Civil", "Hotelaria", 
  "Transporte e Rodovias", "Saúde", "Casas de Apostas (Bet’s)", "Agências de Publicidade"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex flex-col items-start justify-center h-full py-2">
          <img src={logo} alt="Leactis Logo" className="h-20 w-auto object-contain mb-1" />
          <span className="text-[10px] text-muted-foreground font-medium tracking-tight hidden md:block pl-1">
            Nosso negócio é proteger e estruturar o seu.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#solucoes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Soluções</a>
          <a href="#experiencia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Experiência</a>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Fale Conosco</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a href="#sobre" onClick={() => setIsOpen(false)} className="text-sm font-medium p-2 hover:bg-secondary/50 rounded">Sobre</a>
              <a href="#solucoes" onClick={() => setIsOpen(false)} className="text-sm font-medium p-2 hover:bg-secondary/50 rounded">Soluções</a>
              <a href="#experiencia" onClick={() => setIsOpen(false)} className="text-sm font-medium p-2 hover:bg-secondary/50 rounded">Experiência</a>
              <Separator />
              <Button className="w-full">Fale Conosco</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-10">
         <img src={heroBg} className="w-full h-full object-cover" alt="Background pattern" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6">
              Potencialize o seu <span className="text-primary">negócio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              A LEACTIS une diferentes expertises para oferecer uma visão completa do negócio, 
              ajudando nossos clientes a resolver problemas complexos e aproveitar oportunidades 
              de maneira eficiente e segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base">
                Fale com nossos consultores
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Conheça nossos serviços
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display">
              Sobre a Leactis
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                A LEACTIS é uma consultoria empresarial integrada que une inteligência jurídica, 
                gestão administrativa e governança estratégica para estruturar organizações, 
                reduzir riscos e apoiar decisões com precisão.
              </p>
              <p>
                Atuamos fortalecendo processos, organizando operações e criando bases sólidas 
                para que empresas cresçam com segurança, estabilidade e eficiência.
              </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Ecossistema de Soluções</h3>
              <p className="text-muted-foreground mb-4">
                Nosso compromisso é proporcionar estruturas estáveis, previsíveis e confiáveis, 
                preparando organizações para crescer com segurança, eficiência e consistência.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Card key={i} className="bg-background border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-4">
            Nossas Soluções
          </h2>
          <p className="text-muted-foreground">
            Atuamos de forma coordenada para entregar soluções que atendem às necessidades 
            estratégicas e operacionais de cada cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="flex flex-col gap-1">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <span className="font-semibold text-sm">{item.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">
            Experiência Comprovada
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Mais de 50 empresas já se beneficiaram das soluções entregues por consultores da LEACTIS. 
            Nossos consultores possuem sólida experiência em ambientes regulados e não regulados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {CLIENT_SECTORS.map((sector, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white border-none">
                {sector}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-border">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6">
            Pronto para fortalecer a estrutura da sua empresa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Converse com a LEACTIS e descubra como um ecossistema empresarial completo 
            pode apoiar o seu crescimento com método, governança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8">Fale com a LEACTIS</Button>
            <Button size="lg" variant="outline" className="px-8">Solicitar Proposta</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Leactis Logo" className="h-12 w-auto" />
            </div>
            <p className="text-sm font-medium text-foreground mb-2">Seu Ecossistema Empresarial</p>
            <p className="text-sm text-muted-foreground max-w-md">
              Governança • Compliance • Jurídico Interno • Departamento Pessoal • Estratégia Corporativa
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contato</h4>
            <a href="mailto:contato@leactis.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> contato@leactis.com.br
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LEACTIS – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
