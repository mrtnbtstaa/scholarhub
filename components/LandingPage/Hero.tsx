import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="mt-20 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-0">
        {/* Content */}
        <div className="flex flex-col justify-center gap-6 py-12 md:py-20 md:pr-12 md:border-r border-white/10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
              Our Mission
            </span>
          </div>
    
          <h1 className="font-[family-name:var(--font-plex-sans)] text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight max-w-xl">
            Empowering students to find and manage scholarship opportunities
          </h1>
    
          <p className="text-sm md:text-base leading-6 max-w-md">
            We bridge the gap between academic potential and financial means.
            ScholarHub provides the essential infrastructure for students to
            navigate the complex landscape of global funding.
          </p>
    
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="h-11 px-6 rounded-none hover:bg-white/90">
              Browse Scholarships
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 rounded-none border-white/20 hover:bg-white/5"
            >
              How it works
            </Button>
          </div>
        </div>
    
        {/* Image + data panel — no floating glass card, no rotation */}
        <div className="relative">
          <div className="aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden">
            <Image
              src="/assets/hero.png"
              alt="Student reviewing scholarship offers"
              fill
              className="object-cover grayscale contrast-125"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
          </div>
    
          {/* Data readout, not a floating badge */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 border-t border-white/10 bg-black/60 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-wide text-white">
                100% Verified
              </span>
            </div>
            <span className="font-mono text-xs text-white/40">Secured Provider</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
