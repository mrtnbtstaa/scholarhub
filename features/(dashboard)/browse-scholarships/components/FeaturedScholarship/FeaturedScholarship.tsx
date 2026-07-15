import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import { MdTimer } from "react-icons/md";
import Image from "next/image";

const FeaturedScholarship = () => {
  return (
    <Card as="section" className="flex mt-4 h-full items-start">
      <div className="relative h-full w-full">
        <Image
          alt="Featured Scholarship Image"
          src="/assets/featured-scholarships.jpg"
          className="object-cover mask-[linear-gradient(to_right,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
          fill
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 30vw"    
        />
      </div>
      <div className="flex flex-col items-start p-8 gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-2 rounded-full">
            <span className="text-white font-semibold text-sm tracking-wider">
              FEATURED
            </span>
          </div>
          <p className="font-semibold text-lg tracking-wider">
            Sponsored by A*STAR
          </p>
        </div>
        <p className="lg:text-4xl md:text-2xl text-lg text-secondary font-medium tracking-wider">
          Singapore International Graduate Award (SINGA)
        </p>
        <p className="text-gray-500 tracking-wider text-md  w-full">
          Full PhD funding for international students in Science & Engineering.
          Includes full tuition fees, monthly stipend, settlement allowance, and
          airfare grant. A world-class research environment awaits in the heart
          of Asia.
        </p>
        <div className="flex items-center gap-2">
          <Button
            className="font-semibold p-4"
            aria-label="Explore Opportunity Button"
          >
            Explore Opportunity
          </Button>
          <div className="inline-flex items-center gap-1">
            <MdTimer className="text-2xl" />
            <p className="font-semibold tracking-wide text-md">
              Apply by Dec 1, 2024
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedScholarship;
