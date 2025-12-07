import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-real.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Site Solutions" className="h-8" />
            </Link>
            <p className="text-muted-foreground">
              Transformando negocios a través de soluciones digitales
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Diseño UI/UX</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Marketing Digital</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">SEO & SEM</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/nosotros" className="hover:text-primary transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:info@sitesolutions.es" className="hover:text-primary transition-colors">
                  info@sitesolutions.es
                </a>
              </li>
              <li>
                <a href="tel:+34644576022" className="hover:text-primary transition-colors">
                  +34 644 576 022
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/sitesolutionses/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/107362524/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Site Solutions. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link to="/legal" className="hover:text-primary transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
