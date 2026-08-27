"use client"
import Card from "@/components/shared/Card/Card";
import Select from "@/components/ui/Select/Select";
import { fundingData } from "../../data/funding.data";
import { DegreeData } from "@/data/degreeData";
import { CountryData } from "@/data/countryData";
import { useState } from "react";
import SelectField from "@/components/shared/SelectField/SelectField";

const ScholarshipFilter = () => {
  const [country, setCountry] = useState<string | null>()
  const [degree, setDegree] = useState<string | null>()
  const [funding, setFunding] = useState<string | null>()
  return (
    <Card
      className="p-4 border border-[#cbccd4] rounded-2xl flex items-center gap-2"
      variants="custom"
    >
      <SelectField className="w-full" data={CountryData} value={country} onValueChange={setCountry} />
      <SelectField className="w-full" data={DegreeData} value={degree} onValueChange={setDegree} />
      <SelectField className="w-full" data={fundingData} value={funding} onValueChange={setFunding} />
    </Card>
  );
};

export default ScholarshipFilter;
