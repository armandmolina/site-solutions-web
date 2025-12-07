import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Legal = () => {
  useEffect(() => {
    document.title = "Aviso Legal | Site Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aviso legal de Site Solutions. Información sobre términos de uso, propiedad intelectual y legislación aplicable.");
    }
  }, []);
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 border-b border-border">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-hero font-bold mb-8 leading-none max-w-5xl">
              Aviso<br />
              <span className="text-primary">Legal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Información legal de Site Solutions
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Datos identificativos</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Denominación social:</strong> Site Solutions
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Correo electrónico:</strong> info@sitesolutions.es
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Teléfono:</strong> +34 644 576 022
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Objeto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El presente aviso legal regula el uso del sitio web sitesolutions.es, del que es titular Site Solutions. 
                  La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena 
                  y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. Servicios</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A través del sitio web, Site Solutions facilita a los usuarios información sobre sus servicios de 
                  desarrollo web, diseño digital y consultoría tecnológica.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Responsabilidades</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Site Solutions no se hace responsable de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>La continuidad y disponibilidad de los contenidos</li>
                  <li>La ausencia de errores en dichos contenidos</li>
                  <li>La ausencia de virus y/o demás componentes dañinos</li>
                  <li>Los daños causados por el uso indebido del sitio web</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Propiedad intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, 
                  tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad de Site Solutions 
                  y están protegidos por las leyes de propiedad intelectual e industrial.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Enlaces</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, 
                  Site Solutions no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">7. Protección de datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para más información sobre el tratamiento de datos personales, consulta nuestra 
                  <a href="/privacidad" className="text-primary hover:underline"> Política de Privacidad</a>.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">8. Legislación aplicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier 
                  controversia derivada de la navegación por este sitio web, las partes se someten a los Juzgados 
                  y Tribunales de España.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
