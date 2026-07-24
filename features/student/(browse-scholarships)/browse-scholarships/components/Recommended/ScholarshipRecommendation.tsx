import Card from "@/components/shared/Card/Card";

const ScholarshipRecommendation = () => {
  return (
    <Card variants="secondary" className="p-4">
      <div className="flex lg:items-center items-start gap-8 mx-4">
        <div className="flex flex-col items-start">
          <div className="flex md:flex-row md:items-center items-start gap-2">
            <div className="bg-[#6df9bb] rounded-full px-2">
              <span className="text-xs whitespace-nowrap tracking-wide leading-none font-semibold text-[#358537]">
                TOP MATCH
              </span>
            </div>
            <p className="text-white lg:text-3xl md:text-lg text-md font-semibold tracking-wider">
              Recommended for You
            </p>
          </div>
          <p className="text-white tracking-wider md:text-lg text-md md:w-[75%] w-full my-2">
            Based on your Computer Science background in the Philippines, these
            regional fully-funded programs have high success rates for your
            demographic.
          </p>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <div className="bg-[#375172] rounded-full border border-[#526987] p-2">
              <h3 className="text-white font-semibold tracking-wider text-sm">
                Computer Science
              </h3>
            </div>
            <div className="bg-[#375172] rounded-full border border-[#526987] p-2">
              <h3 className="text-white font-semibold tracking-wider text-sm">
                Fully Funded
              </h3>
            </div>
            <div className="bg-[#375172] rounded-full border border-[#526987] p-2">
              <h3 className="text-white font-semibold tracking-wider text-sm">
                Japan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScholarshipRecommendation;
