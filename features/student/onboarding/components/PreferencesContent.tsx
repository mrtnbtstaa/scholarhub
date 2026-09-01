import { PreferencesListProps } from "../types/preferences.types";

interface PreferencesProps {
  title: string;
  items: PreferencesListProps[];
}

const PreferencesContent = ({ title, items }: PreferencesProps) => {
  return (
    <div className="flex flex-col w-full h-auto /border-t /border-b p-6 /border-gray-300">
      <div className="flex items-center w-full gap-2">
        <h2 className="text-primary tracking-wide font-semibold text-md">
          {title}
        </h2>
      </div>

      <div className="flex gap-4 mt-2 w-full overflow-x-auto py-2">
        {items?.map(({ name }) => (
          <button
            key={name}
            type="button"
            className="group whitespace-nowrap relative w-full px-4 py-2 text-sm font-medium tracking-wide rounded-xl border border-slate-200/80 dark:border-slate-800 bg-linear-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-900/50 text-slate-700 dark:text-slate-300 shadow-sm hover:shadow hover:border-primary/40 dark:hover:border-primary/40 hover:text-primary dark:hover:text-primary transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-center"
          >
            {/* LABEL */}
            <span className="relative z-10">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreferencesContent;