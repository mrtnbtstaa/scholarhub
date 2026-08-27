import Card from "@/components/shared/Card/Card";

const AboutScholarship = () => {
  return (
    <Card className="p-4 mt-8" as="section">
      <h2 className="text-primary text-2xl tracking-wider font-semibold mb-3">
        About the Scholarship
      </h2>
      <div className="flex flex-col items-start gap-3 md:w-[70%] w-full">
        <p className="text-gray-700 tracking-wider text-md font-normal">
          The Ministry of Education, Culture, Sports, Science and Technology
          (MEXT) of Japan offers scholarships to international students who wish
          to study at Japanese universities as Undergraduate Students under the
          Japanese Government (MEXT) Scholarship Program.
        </p>
        <p className="text-gray-700 tracking-wider text-md font-normal">
          This prestigious program aim to foster human resources who will become
          bridges of friendship between the grantee’s country and Japan through
          their study in Japan and who will contribute to the development of
          both countries and the wider world.
        </p>
      </div>
    </Card>
  );
};

export default AboutScholarship;
