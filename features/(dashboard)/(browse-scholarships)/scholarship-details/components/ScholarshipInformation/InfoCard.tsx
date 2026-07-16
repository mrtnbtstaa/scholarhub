import Card from "@/components/shared/Card/Card";

interface InfoProps{
    title: string;
    subTitle: string;
}

const InfoCard = ({title, subTitle}: InfoProps) => {
  return (
    <Card className="p-5">
      <h2 className="text-sm font-semibold text-gray-700 tracking-wide">
        {title}
      </h2>
      <h3 className="text-sm text-secondary tracking-wider font-semibold">
        {subTitle}
      </h3>
    </Card>
  );
};

export default InfoCard;
