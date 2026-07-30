import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Main from "@/components/shared/Section/Main";
import ScholarshipRecommendation from "./components/Recommended/ScholarshipRecommendation";
import ScholarshipFilter from "./components/ScholarshipFilter/ScholarshipFilter";
import FeaturedScholarship from "./components/FeaturedScholarship/FeaturedScholarship";
import ScholarshipGrid from "./components/ScholarshipGrid/ScholarshipGrid";

const BrowseScholarshipsPage = () => {
  return (
    <Main>
      <PageHeader
        title="Browse Scholarships"
        description="Discover verified academic opportunities worldwide. Our intelligence engine has matched you with over 45 international grants based on your profile."
      />
      <ScholarshipRecommendation />
      <FeaturedScholarship />
      <div className="flex lg:flex-row flex-col mt-8 gap-8">
        <ScholarshipFilter />
        <ScholarshipGrid />
      </div>
    </Main>
  );
};

export default BrowseScholarshipsPage;
