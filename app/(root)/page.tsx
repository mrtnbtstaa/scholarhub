import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import { InkNote } from "@/components/LandingPage/HandDrawn";
import { BellRing, CheckCheckIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

const MOCK_DATA = [
  {
    id: crypto.randomUUID(),
    title: "Academic Excellence Scholarship",
    description: "For students with outstanding academic performance",
    image: "/assets/hero.png",
    amount: 5000,
    deadline: "2026-12-31",
    status: "pending",
  },
  {
    id: crypto.randomUUID(),
    title: "Research Grant Scholarship",
    description: "For students pursuing research in STEM fields",
    image: "/assets/hero.png",
    amount: 10000,
    deadline: "2026-11-15",
    status: "approved",
  },
  {
    id: crypto.randomUUID(),
    title: "Arts & Humanities Scholarship",
    description: "For students in creative and liberal arts programs",
    image: "/assets/hero.png",
    amount: 7500,
    deadline: "2026-10-01",
    status: "rejected",
  },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const LandingPage = () => {
  return (
    <div className="px-4 md:px-10 md:mt-20 pb-10">
      <Header />
      <Hero />

      <section id="how-it-works" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                How it works
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight text-primary">
              Find it, track it, don&apos;t miss it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-8 rounded-xl bg-surface border border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text text-3xl text-primary-foreground">
                  <SearchIcon />
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Discover
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Access a curated database of thousands of global scholarships
                tailored specifically to your unique profile and background.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface border border-primary/30 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-green-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground text-3xl">
                  <CheckCheckIcon />
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Organize
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Keep track of multiple applications, document requirements, and
                specific deadlines with our integrated management dashboard.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface border border-primary/30 hover:border-primary/30 transition-all group">
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-primary-foreground text-3xl">
                    <BellRing />
                  </span>
                </div>

                <InkNote
                  variant="hook"
                  arrowClassName="h-11 w-12"
                  className="hidden xl:flex"
                  noteClassName="text-base"
                >
                  the part
                  <br />
                  everyone forgets
                </InkNote>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Never Miss
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Receive automated reminders for upcoming deadlines and status
                updates on your active scholarship applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="active-scholarships"
        className="border-primary/30 border p-4 rounded-[16px]"
      >
        <div className="">
          <h2
            id="active-scholarships"
            className="font-heading text-xl font-bold mb-8"
          >
            Active Scholarships
          </h2>

          <div className="marquee">
            <div className="marquee-track overflow-x-auto flex flex-nowrap pb-2">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="marquee-group flex flex-nowrap"
                  aria-hidden={copy === 1}
                >
                  {[...MOCK_DATA, ...MOCK_DATA].map((item, index) => (
                    <li
                      key={`${item.id}-${index}`}
                      className="flex rounded-full items-center gap-4 p-2 pr-4 border-border border"
                    >
                      <Image
                        src={item.image}
                        alt=""
                        width={80}
                        height={80}
                        className="size-10 rounded-full"
                      />
                      <span className="whitespace-nowrap">{item.title}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {currency.format(item.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
