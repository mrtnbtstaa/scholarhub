import Input from "@/components/ui/Input/Input"

const ScholarshipSearch = () => {
    return (
        <div className="mt-4">
        <h3 className="text-xs font-semibold tracking-wider mb-2 text-gray-700">
          KEYWORD SEARCH
        </h3>
        <Input placeholder="e.g. AI Research" className="w-full" />
      </div>
    )
}

export default ScholarshipSearch;