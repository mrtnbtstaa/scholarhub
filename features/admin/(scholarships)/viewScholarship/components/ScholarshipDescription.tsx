import Card from "@/components/shared/Card/Card";
import Heading from "@/components/shared/Heading/Heading";

const ScholarshipDescription = () => {
  return (
    <Card className="p-4 h-fit mt-4" as="section">
      <Heading>Scholarship Description</Heading>
      <p className="text-slate-500 text-sm tracking-wider mt-2">
        The Monbukagakusho: MEXT Scholarship is one of the most prestigious
        fully-funded academic awards globally. Established by the Japanese
        Ministry of Education, Culture, Sports, Science and Technology, it aims
        to foster international leaders who will serve as bridges between Japan
        and their home countries.
      </p>
      <p className="text-slate-500 text-sm tracking-wider mt-4">
        Undergraduate recipients undergo a one-year intensive Japanese language
        preparatory course followed by four years of study in their specialized
        field at a top-tier Japanese university. This program covers various
        disciplines from natural sciences to humanities and social sciences.
      </p>
    </Card>
  );
};

export default ScholarshipDescription;
