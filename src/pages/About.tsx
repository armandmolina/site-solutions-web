import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import techApple from "@/assets/tech-apple.jpg";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-hero font-bold mb-8 leading-none max-w-5xl">
            Somos<br />
            <span className="text-primary">Site Solutions</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl">
            Tu partner en transformación digital
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Nuestra<br />
                <span className="text-primary">misión</span>
              </h2>
            </div>
            <div className="space-y-6 text-xl text-muted-foreground">
              <p>
                Ayudamos a empresas de todos los tamaños a encontrar su lugar en el mundo digital.
              </p>
              <p>
                No hacemos webs por hacer. Creamos soluciones que resuelven problemas reales 
                y generan resultados medibles.
              </p>
              <p>
                Cada negocio es único, y merece una estrategia digital que refleje su identidad 
                y potencie sus fortalezas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-primary mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Transparencia</h3>
              <p className="text-muted-foreground">
                Sin letra pequeña. Hablamos claro sobre plazos, costes y resultados esperados.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-primary mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Resultados</h3>
              <p className="text-muted-foreground">
                Nos medimos por tu éxito. Si tu negocio crece, hemos hecho bien nuestro trabajo.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-primary mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Innovación</h3>
              <p className="text-muted-foreground">
                Tecnología de vanguardia sin perder de vista lo que funciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 relative overflow-hidden">
        {/* Tech Apple background */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${techApple})` }}
          aria-hidden="true"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent" aria-hidden="true" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Experiencia<br />
                <span className="text-primary">comprobada</span>
              </h2>
            </div>

            <div className="space-y-12">
              <div>
                <div className="text-6xl font-bold text-primary mb-4">8+</div>
                <p className="text-xl">Años transformando negocios</p>
              </div>

              <div>
                <div className="text-6xl font-bold text-primary mb-4">100+</div>
                <p className="text-xl">Proyectos completados</p>
              </div>

              <div>
                <div className="text-6xl font-bold text-primary mb-4">50+</div>
                <p className="text-xl">Clientes activos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Sectores
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Retail y E-commerce",
              "Servicios profesionales",
              "Hostelería y turismo",
              "Salud y bienestar",
              "Educación",
              "Industria y manufactura",
              "Inmobiliario",
              "Startups tecnológicas"
            ].map((sector, index) => (
              <div
                key={sector}
                className="flex items-center gap-4 py-6 border-b border-border"
              >
                <span className="text-3xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Trabajemos<br />
              <span className="text-primary">juntos</span>
            </h2>
            <p className="text-2xl mb-12 text-muted-foreground">
              Cuéntanos tu proyecto y veamos cómo podemos ayudarte
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
