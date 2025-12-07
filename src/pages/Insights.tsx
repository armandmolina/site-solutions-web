import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cyberNetwork from "@/assets/cyber-network.jpg";

declare global {
  interface Document {
    title: string;
  }
}

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const endTime = startTime + duration;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (now < endTime) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl md:text-8xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
};

const Insights = () => {
  useEffect(() => {
    document.title = "Estadísticas de Digitalización Empresarial | Site Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Datos y estadísticas sobre digitalización empresarial. El 87% de consumidores buscan online antes de comprar. Descubre por qué tu negocio necesita presencia digital.");
    }
  }, []);

  const stats = [
    {
      number: 87,
      suffix: "%",
      label: "de los consumidores buscan online antes de comprar",
      description: "Tu presencia digital es tu primera impresión"
    },
    {
      number: 64,
      suffix: "%",
      label: "más de ingresos para empresas con estrategia digital",
      description: "La digitalización no es un gasto, es una inversión"
    },
    {
      number: 3.5,
      suffix: "x",
      label: "más clientes potenciales con marketing digital",
      description: "Alcanza a quien realmente te busca"
    },
    {
      number: 24,
      suffix: "/7",
      label: "tu negocio abierto todo el día",
      description: "Mientras duermes, tu web trabaja"
    },
    {
      number: 76,
      suffix: "%",
      label: "de las empresas sin web pierden clientes",
      description: "Si no estás online, no existes"
    },
    {
      number: 200,
      suffix: "%",
      label: "ROI medio de una buena web corporativa",
      description: "Cada euro invertido retorna multiplicado"
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-hero font-bold mb-8 leading-none max-w-5xl">
            Los números<br />
            <span className="text-primary">no mienten</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl">
            Por qué tu negocio necesita estar online hoy, no mañana
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24" aria-labelledby="insights-heading">
        <h2 id="insights-heading" className="sr-only">Estadísticas de digitalización empresarial</h2>
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {stats.map((stat, index) => (
              <article
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <AnimatedNumber end={stat.number} suffix={stat.suffix} />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {stat.label}
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Cyber network background */}
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${cyberNetwork})` }}
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              ¿Listo para<br />
              <span className="text-primary">digitalizar</span>?
            </h2>
            <p className="text-2xl mb-12 text-muted-foreground">
              Cada día que esperas es una oportunidad perdida
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all"
            >
              Habla con nosotros
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
