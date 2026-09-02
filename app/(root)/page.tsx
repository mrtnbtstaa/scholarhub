import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import { BellRing, CheckCheckIcon, SearchIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="px-10 mt-20 bg-surface">
      <Header />
      <Hero />

      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-8 rounded-xl bg-surface-container-low border border-primary/30 transition-all group bg-surface">
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text text-3xl text-primary-foreground">
                  <SearchIcon />
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Discover
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Access a curated database of thousands of global scholarships
                tailored specifically to your unique profile and background.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface border border-primary/30 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-green-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground text-3xl">
                  <CheckCheckIcon/>
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Organize
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Keep track of multiple applications, document requirements, and
                specific deadlines with our integrated management dashboard.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface border border-primary/30 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground text-3xl">
                  <BellRing/>
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Never Miss
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Receive automated reminders for upcoming deadlines and status
                updates on your active scholarship applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
