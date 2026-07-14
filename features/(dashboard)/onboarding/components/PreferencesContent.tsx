import Button from "@/components/ui/Button/Button";
import { PreferencesListProps } from "../types/preferences.types";

interface PreferencesProps {
  title: string;
  items: PreferencesListProps[];
}

const PreferencesContent = ({ title, items }: PreferencesProps) => {
  return (
    <div className="mt-4">
      <h2 className="text-secondary tracking-wide font-semibold text-md">
        {title}
      </h2>
      <div className="flex gap-4 items-start mt-2">
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
