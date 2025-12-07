import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | Site Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Política de privacidad de Site Solutions. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.");
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
              Política de<br />
              <span className="text-primary">Privacidad</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Información que recopilamos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En Site Solutions, recopilamos información que nos proporcionas directamente cuando te pones en contacto con nosotros, 
                  incluyendo nombre, correo electrónico, número de teléfono y cualquier otra información que decidas compartir.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Uso de la información</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Enviarte información relevante sobre nuestros servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. Protección de datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información 
                  contra el acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Compartir información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos, comercializamos ni transferimos tu información personal a terceros sin tu consentimiento, 
                  excepto cuando sea necesario para proporcionar nuestros servicios o cumplir con requisitos legales.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
                  la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Tus derechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bajo el RGPD, tienes derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">7. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para ejercer tus derechos o si tienes preguntas sobre esta política de privacidad, 
                  contáctanos en <a href="mailto:info@sitesolutions.es" className="text-primary hover:underline">info@sitesolutions.es</a>
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

export default Privacy;
