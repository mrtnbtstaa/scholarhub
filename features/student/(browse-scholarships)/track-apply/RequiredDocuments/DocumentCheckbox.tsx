import Checkbox from "@/components/ui/Checkbox/Checkbox";

interface DocumentProps{
    title: string;
}

const DocumentCheckbox = ({title}: DocumentProps) => {
  return (
    <div className="bg-[#f8f9ff] rounded-lg border p-4 border-[#d7d6de] text-start w-full flex items-center gap-2">
      <div className="flex gap-2 items-center">
        <Checkbox />
        <h3 className="whitespace-nowrap text-md tracking-wider">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default DocumentCheckbox;
