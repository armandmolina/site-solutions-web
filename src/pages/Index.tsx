import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import reunion from "@/assets/reunion.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const Index = () => {
  const stat1 = useCountUp({ end: 87, duration: 2000 });
  const stat2 = useCountUp({ end: 35, duration: 2000 });
  const stat3 = useCountUp({ end: 200, duration: 2000 });

  useEffect(() => {
    document.title = "Digitalización Empresarial | Desarrollo Web & Marketing Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Digitalizamos tu empresa con webs a medida, diseño profesional y estrategia digital. Desarrollo web, SEO, marketing digital y e-commerce en Barcelona.");
    }
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-24 border-t border-border" aria-labelledby="stats-heading">
        <div className="container mx-auto px-6 md:px-12">
          <h2 id="stats-heading" className="sr-only">Estadísticas de digitalización empresarial</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <article>
              <div ref={stat1.elementRef} className="text-5xl md:text-6xl font-bold text-primary mb-3" aria-label="87 por ciento">
                {stat1.count}%
              </div>
              <p className="text-lg text-muted-foreground">
                buscan online antes de comprar
              </p>
            </article>
            <article>
              <div ref={stat2.elementRef} className="text-5xl md:text-6xl font-bold text-primary mb-3" aria-label="3.5 veces más clientes">
                {(stat2.count / 10).toFixed(1)}x
              </div>
              <p className="text-lg text-muted-foreground">
                más clientes con presencia digital
              </p>
            </article>
            <article>
              <div ref={stat3.elementRef} className="text-5xl md:text-6xl font-bold text-primary mb-3" aria-label="200 por ciento ROI">
                {stat3.count}%
              </div>
              <p className="text-lg text-muted-foreground">
                ROI medio de digitalización
              </p>
            </article>
          </div>
          <div className="text-center">
            <Link
              to="/insights"
              className="inline-block text-lg font-medium hover:text-primary transition-colors border-b-2 border-primary"
              aria-label="Ver todas las estadísticas de digitalización empresarial"
            >
              Ver todas las estadísticas →
            </Link>
          </div>
        </div>
      </section>

      <Services />
      <WhyUs />
      
      {/* CTA Section */}
      <section className="py-32 border-t border-border relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" aria-hidden="true" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="cta-heading" className="text-5xl md:text-7xl font-bold mb-8">
                Hablemos de<br />
                <span className="text-primary">tu proyecto</span>
              </h2>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all"
                aria-label="Contactar con Site Solutions para digitalizar tu empresa"
              >
                Contactar ahora
              </Link>
            </div>
            
            {/* Modern image container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all">
                <img 
                  src={reunion} 
                  alt="Equipo de Site Solutions en reunión de estrategia digital y desarrollo web en Barcelona" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
