import PageTitle from "@/components/shared/PageTitle/PageTitle";
import Section from "@/components/shared/Section/Section";
import ScholarshipRecommendation from "./components/Recommended/ScholarshipRecommendation";
import Input from "@/components/ui/Input/Input";
import { MdSearch } from "react-icons/md";
import ScholarshipFilter from "./components/ScholarshipFilter/ScholarshipFilter";
import FeaturedScholarship from "./components/FeaturedScholarship/FeaturedScholarship";
import ScholarshipGrid from "./components/ScholarshipGrid/ScholarshipGrid";

const BrowseScholarshipsPage = () => {
  return (
    <Section>
      <PageTitle
        title="Browse Scholarships"
        description="Discover verified academic opportunities worldwide. Our intelligence engine has matched you with over 45 international grants based on your profile."
      />
      <ScholarshipRecommendation />
      <FeaturedScholarship />
      {/* <Input
        prefixIcon={MdSearch}
        placeholder="Search scholarships, universities, countries, providers, or field of study..."
        className="w-full p-6 mt-4"
      /> */}
      <div className="flex lg:flex-row flex-col mt-8 gap-8">
        <ScholarshipFilter />
        <ScholarshipGrid />
      </div>
    </Section>
  );
};

export default BrowseScholarshipsPage;
