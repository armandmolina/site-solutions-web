import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { lazy, Suspense, useRef, useEffect, useState } from "react";


const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  // Smooth mouse forwarding using requestAnimationFrame
  const forwardPointer = (e: React.MouseEvent) => {
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    
    if (rafRef.current) return; // Skip if already scheduled
    
    rafRef.current = requestAnimationFrame(() => {
      const canvas = wrapperRef.current?.querySelector('canvas');
      if (canvas) {
        const evt = new PointerEvent('pointermove', {
          clientX: lastMousePos.current.x,
          clientY: lastMousePos.current.y,
          bubbles: true,
          cancelable: false,
          pointerType: 'mouse',
        });
        canvas.dispatchEvent(evt);
      }
      rafRef.current = undefined;
    });
  };

  // Load Spline only when section is visible + performance check
  useEffect(() => {
    const shouldLoad = !navigator.userAgent.match(/Mobile|Tablet|Android|iPhone|iPad/i);
    
    if (!shouldLoad) {
      return; // Don't load on mobile devices
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadSpline(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" onMouseMove={forwardPointer} onWheelCapture={(e) => e.stopPropagation()}>
      {/* Spline 3D Animation Background - Optimized loading */}
      <div ref={wrapperRef} className="absolute inset-0 w-full h-full [&_#logo]:hidden" style={{ pointerEvents: 'auto' }} aria-hidden="true">
        {shouldLoadSpline ? (
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-primary/25 via-blue-500/15 to-primary/30" />
          }>
            <Spline
              scene="https://draft.spline.design/WAgqGyy0Ay8qWhYL/scene.splinecode"
              style={{ width: '100%', height: '100%', willChange: 'transform' }}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/25 via-blue-500/15 to-primary/30" />
        )}
      </div>
      
      {/* Gradient overlay for text readability - pointer-events none to allow Spline interaction */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50 pointer-events-none" aria-hidden="true" />
      
      <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-20 md:py-32 relative z-10 w-full pointer-events-none">
        <div className="text-left max-w-full overflow-hidden">
          <h1 className="font-bold mb-4 sm:mb-6 md:mb-8 leading-[0.85] sm:leading-none tracking-tight text-left select-none">
            {/* Mobile: Split into two lines with hyphen */}
            <span className="block sm:hidden">
              <span className="block text-[4.5rem] uppercase leading-[0.85]">Digita-</span>
              <span className="block text-[4.5rem] uppercase leading-[0.85]">lizamos</span>
            </span>
            {/* Desktop: Single line with responsive sizing */}
            <span className="hidden sm:block text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[12rem] uppercase leading-none">Digitalizamos</span>
            
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-1 sm:mt-2">
              <span className="text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[6rem] 2xl:text-[7rem] text-primary lowercase leading-none">tu</span>
              <span className="text-[3.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] font-[Playfair_Display] uppercase italic font-light tracking-wide leading-none">empresa</span>
            </div>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mt-6 sm:mt-8">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-md select-none">
              Webs a medida, diseño profesional<br />
              y estrategia digital
            </p>

            <Link
              to="/contacto"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 sm:px-8 py-4 sm:py-4 text-lg sm:text-lg font-medium hover:bg-primary/90 transition-all self-start md:self-auto pointer-events-auto"
            >
              Hablemos
              <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
