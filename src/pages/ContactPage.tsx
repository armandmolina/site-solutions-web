import { useState, useEffect } from "react";
import { ArrowRight, Loader2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cyberNetwork from "@/assets/cyber-network.jpg";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = "Contacto | Site Solutions - Digitalización Empresarial";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contacta con Site Solutions. Desarrollo web, diseño UI/UX y marketing digital en Barcelona. Email: info@sitesolutions.es | Tel: +34 644 576 022");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3faeaa51-3bba-4500-acb4-0ca317e3c5d9",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to: "info@sitesolutions.es",
          subject: "Nuevo mensaje de contacto desde sitesolutions.es",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo en menos de 24 horas.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-hero font-bold mb-8 leading-none">
                Hablemos
              </h1>
              <p className="text-2xl text-muted-foreground mb-12">
                Respuesta en menos de 24 horas
              </p>
              
              <div className="space-y-6 text-lg">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a 
                    href="mailto:info@sitesolutions.es" 
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    info@sitesolutions.es
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Teléfono</div>
                  <a 
                    href="tel:+34644576022" 
                    className="block text-xl font-bold hover:text-primary transition-colors"
                  >
                    +34 644 576 022
                  </a>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Horario</div>
                  <div className="text-lg">
                    <p>Lunes - Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="h-14 text-lg border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="h-14 text-lg border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                />
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="h-14 text-lg border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                />
              </div>

              <div>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Empresa"
                  className="h-14 text-lg border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto"
                  required
                  className="min-h-[150px] text-lg border-0 border-b border-border rounded-none resize-none focus-visible:ring-0 focus-visible:border-primary px-0"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  Al enviar esta comunicación acepto el tratamiento de mis datos según la{" "}
                  <Link to="/privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !acceptedTerms}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all w-full md:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Nuestra <span className="text-primary">ubicación</span>
          </h2>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2898!2d2.682!3d41.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae5e8d8d8d8d8%3A0x1234567890!2sCarrer%20de%20Pompeu%20Fabra%2C%209%2C%203r%2C%2008397%20Pineda%20de%20Mar%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Site Solutions en Pineda de Mar"
            />
          </div>
          <p className="text-lg text-muted-foreground mt-6">
            Carrer de Pompeu Fabra, 9, 3r, 08397 Pineda de Mar, Barcelona
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Prefieres una <span className="text-primary">reunión?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reserva una consulta gratuita de 30 minutos
            </p>
            <a
              href="https://calendly.com/sitesolutions-es/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-primary/90 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Reservar reunión
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Cyber network background */}
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${cyberNetwork})` }}
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ¿Qué esperar después de contactar?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <span className="text-primary font-bold">1.</span> Responderemos en menos de 24 horas
              </p>
              <p>
                <span className="text-primary font-bold">2.</span> Agendaremos una consulta gratuita de 30 minutos
              </p>
              <p>
                <span className="text-primary font-bold">3.</span> Te presentaremos una propuesta personalizada
              </p>
              <p>
                <span className="text-primary font-bold">4.</span> Sin compromiso hasta que estés 100% convencido
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
