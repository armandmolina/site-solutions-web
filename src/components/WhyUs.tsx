import { useCountUp } from "@/hooks/useCountUp";

const WhyUs = () => {
  const projects = useCountUp({ end: 100, duration: 2000 });
  const satisfaction = useCountUp({ end: 98, duration: 2000 });

  return (
    <section id="why-us" className="py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Por qué<br />
              <span className="text-primary">nosotros</span>
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <div ref={projects.elementRef} className="text-6xl font-bold mb-4 text-primary">
                {projects.count}+
              </div>
              <p className="text-xl">Proyectos completados</p>
            </div>

            <div>
              <div ref={satisfaction.elementRef} className="text-6xl font-bold mb-4 text-primary">
                {satisfaction.count}%
              </div>
              <p className="text-xl">Clientes satisfechos</p>
            </div>

            <div>
              <div className="text-6xl font-bold mb-4 text-primary">24/7</div>
              <p className="text-xl">Soporte técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
