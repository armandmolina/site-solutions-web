import { useEffect, useRef } from "react";
import oficinasFondo from "@/assets/oficinas-fondo.png";

const services = [
  "Desarrollo Web",
  "Diseño UI/UX", 
  "Marketing Digital",
  "SEO & Posicionamiento",
  "E-commerce",
  "Apps Móviles",
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".service-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Servicios
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Modern image container */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all h-full">
              <img 
                src={oficinasFondo} 
                alt="Oficinas Site Solutions" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            {services.map((service, index) => (
              <div
                key={service}
                className="service-item opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 py-6 border-b border-border group-hover:border-primary transition-colors">
                  <span className="text-3xl md:text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
