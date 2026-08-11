import PreferencesContent from "../PreferencesContent";
import { PreferencesListProps } from "../../types/preferences.types";

const countriesList: PreferencesListProps[] = [
  {
    name: "Japan",
  },
  {
    name: "Canada",
  },
  {
    name: "Australia",
  },
  {
    name: "Germany",
  },
  {
    name: "United Kingdom",
  },
  {
    name: "USA",
  },
];
const fundingList: PreferencesListProps[] = [
  {
    name: "Fully Funded",
  },
  {
    name: "Partially Funded",
  },
  {
    name: "NGO Sponsored",
  },
  {
    name: "Corporate Grant",
  },
];
const fieldInterestList: PreferencesListProps[] = [
  {
    name: "Computer Science",
  },
  {
    name: "Business",
  },
  {
    name: "Arts",
  },
  {
    name: "Medicine",
  },
  {
    name: "Engineering",
  },
  {
    name: "Law",
  },
];

const StepThree = () => {
  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <PreferencesContent
        title="WHERE WOULD YOU LIKE TO STUDY?"
        items={countriesList}
      />
      <PreferencesContent title="FUNDING PRREFERENCES" items={fundingList} />
      <PreferencesContent
        title="FIELDS OF INTEREST"
        items={fieldInterestList}
      />
    </div>
  );
};

export default StepThree;
