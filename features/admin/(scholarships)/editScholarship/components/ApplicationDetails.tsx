"use client";
import Card from "@/components/shared/Card/Card";
import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

interface DocumentItemType {
  id: string;
  document: string;
  isRequired: boolean;
}

interface DocumentItemProps {
  item: DocumentItemType;
  onChange: (id: string, name: string) => void;
  onToggleRequired: (id: string) => void;
  onRemove: (id: string) => void;
}

const DocumentItem = ({
  item,
  onChange,
  onToggleRequired,
  onRemove,
}: DocumentItemProps) => {
  return (
    <div className="flex items-center justify-between bg-[#f8f9ff] rounded-md p-2 border border-[#dfe0e7] w-full">
      <Input
        variants="custom"
        type="text"
        value={item.document}
        onChange={(e) => onChange(item.id, e.target.value)}
        placeholder="Enter document name (e.g., Passport, Resume)"
        className="text-sm w-full"
      />
      <div className="flex items-center gap-2">
        <Button variants="custom" onClick={(e) => {
          e.preventDefault();
          onToggleRequired(item.id)
        }}>
          <div
            className={cn(
              "rounded-full px-3",
              item.isRequired ? "bg-btn-primary" : "bg-[#74767e]",
            )}
          >
            <span className="text-xs tracking-wider font-semibold text-white">
              {item.isRequired ? "REQUIRED" : "OPTIONAL"}
            </span>
          </div>
        </Button>
        <Button variants="custom" onClick={(e) => {
          e.preventDefault();
          onRemove(item.id)
        }}>
            <BiTrash className="text-lg text-red-600" />
        </Button>
      </div>
    </div>
  );
};

const ApplicationDetails = () => {
  const [documents, setDocuments] = useState<DocumentItemType[]>([]);

  // Add new blank document
  const handleAddDocument = () => {
    const newDoc: DocumentItemType = {
      id: crypto.randomUUID(),
      document: "",
      isRequired: true,
    };
    setDocuments((prev) => [...prev, newDoc]);
  };

  // Update text for a specific document
  const handleChangeDocument = (id: string, name: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, document: name } : doc)),
    );
  };

  // Toggle between required/optional
  const handleToggleRequired = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, isRequired: !doc.isRequired } : doc,
      ),
    );
  };

  // Handle removing document
  const handleRemoveDocument = (id: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <Card className="p-4">
      <div className="flex items-center w-full gap-4">
        <FormField className="w-full">
          <Label htmlFor="Application Deadline">Application Deadline</Label>
          <Input type="date" />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="Expected Start Date">Expected Start Date</Label>
          <Input placeholder="117,000" />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="Document Checklist">Document Checklist</Label>
      </FormField>
      <div className="flex flex-col items-start gap-2">
        {documents.map((doc) => (
          <DocumentItem
            key={doc.id}
            item={doc}
            onChange={handleChangeDocument}
            onRemove={handleRemoveDocument}
            onToggleRequired={handleToggleRequired}
          />
        ))}
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleAddDocument();
          }}
          iconClass="text-gray-600"
          variants="custom"
          className="border-dashed text-sm text-gray-600 border w-full p-3"
          suffixIcon={MdAdd}
        >
          Add Document Field
        </Button>
      </div>
    </Card>
  );
};

export default ApplicationDetails;
