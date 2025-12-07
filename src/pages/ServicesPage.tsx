import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Globe, Palette, TrendingUp, Search, ShoppingCart, Code, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import networkPattern from "@/assets/network-pattern.jpg";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y responsive que convierten visitantes en clientes.",
    features: [
      "Diseño responsive y móvil-first",
      "Optimización de velocidad y SEO",
      "Integración con herramientas de negocio",
      "Mantenimiento y soporte continuo"
    ]
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas que tus usuarios amarán usar. Diseño centrado en conversión.",
    features: [
      "Investigación de usuarios",
      "Prototipado y testing",
      "Diseño de sistemas escalables",
      "Branding y identidad visual"
    ]
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estrategias data-driven que generan resultados medibles y crecimiento sostenible.",
    features: [
      "Estrategia de contenidos",
      "Social media marketing",
      "Email marketing automation",
      "Analytics y reporting"
    ]
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Posicionamiento orgánico y campañas de pago que te sitúan frente a tu audiencia.",
    features: [
      "Auditoría SEO completa",
      "Optimización on-page y off-page",
      "Google Ads y campañas SEM",
      "Link building estratégico"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online que venden 24/7. Desde el catálogo hasta el pago seguro.",
    features: [
      "Plataformas escalables",
      "Pasarelas de pago integradas",
      "Gestión de inventario",
      "Optimización de conversión"
    ]
  },
  {
    icon: Code,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma que destacan en las stores.",
    features: [
      "iOS y Android",
      "React Native / Flutter",
      "Integración con APIs",
      "Publicación en stores"
    ]
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Servicios de Desarrollo Web y Marketing Digital | Site Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Servicios de desarrollo web, diseño UI/UX, marketing digital, SEO, SEM, e-commerce y apps móviles en Barcelona. Soluciones digitales profesionales.");
    }
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-hero font-bold mb-8 leading-none max-w-5xl">
            Servicios que<br />
            <span className="text-primary">transforman</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl">
            Soluciones digitales completas para cada etapa de tu negocio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Servicios digitales completos</h2>
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <article
                  key={service.title}
                  className="grid md:grid-cols-2 gap-16 items-start"
                >
                  <div className={isEven ? "" : "md:order-2"}>
                    <div className="inline-flex p-4 bg-primary/10 mb-6" aria-hidden="true">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      {service.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className={isEven ? "" : "md:order-1"}>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                        >
                          <span className="text-2xl font-bold text-primary mt-1" aria-label={`Característica ${idx + 1}`}>
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <p className="text-lg">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Network pattern background */}
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${networkPattern})` }}
          aria-hidden="true"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" aria-hidden="true" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Nuestro<br />
            <span className="text-primary">proceso</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Consulta", desc: "Entendemos tu negocio y objetivos" },
              { num: "02", title: "Estrategia", desc: "Diseñamos el plan de acción" },
              { num: "03", title: "Ejecución", desc: "Construimos tu solución" },
              { num: "04", title: "Lanzamiento", desc: "Te acompañamos en cada paso" },
            ].map((step) => (
              <div key={step.num} className="space-y-4">
                <div className="text-6xl font-bold text-primary">{step.num}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              ¿Hablamos de<br />
              <span className="text-primary">tu proyecto</span>?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all justify-center"
              >
                Empezar ahora
              </Link>
              <a
                href="/CatalogoServiciosSS_2025_PRO.pdf"
                download
                className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-medium hover:bg-secondary/80 transition-all justify-center border border-border"
              >
                <Download className="w-5 h-5" />
                Descargar catálogo
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
