import Button from "@/components/ui/Button/Button";
import { PreferencesListProps } from "../types/preferences.types";

interface PreferencesProps {
  title: string;
  items: PreferencesListProps[];
}

const PreferencesContent = ({ title, items }: PreferencesProps) => {
  return (
    <div className="mt-4">
      <h2 className="text-primary tracking-wide font-semibold text-md">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-3 grid-rows-1 gap-4 mt-2">
        {items &&
          items.map(({ name }) => (
            <Button
              key={name}
              className="w-full whitespace-nowrap tracking-wider"
              variants="outlined"
            >
              {name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default PreferencesContent;
