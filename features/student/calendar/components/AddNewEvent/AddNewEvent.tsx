"use client";

import Card from "@/components/shared/Card/Card";
import CloseButton from "@/components/shared/CloseButton/CloseButton";
import Button from "@/components/ui/Button/Button";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import { ApplicationStatusData } from "@/features/(dashboard)/my-applications/data/applicationStatus.data";
import { cn } from "@/lib/utils";
import { useOpenEventStore } from "../../store/useOpenEventStore";
import { useDisableScroll } from "@/hooks/useDisableScroll";

const AddNewEvent = () => {
  const openEvent = useOpenEventStore((state) => state.openEvent);
  const { setEventVisibility } = useOpenEventStore((state) => state.action);

  useDisableScroll(openEvent);

  return (
    <div
      className={cn(
        "bg-[#788897]/70 min-h-full w-full fixed left-0 top-0 z-1000 transition-transform duration-300 ease-in-out backdrop-blur-xs overflow-hidden items-center justify-center",
        openEvent ? "flex" : "hidden",
      )}
    >
      <Card className="flex flex-col h-full items-start justify-center rounded-2xl bg-white p-6 md:w-125 w-100">
        <header className="flex items-center justify-between w-full">
          <h3 className="text-sm text-secondary font-medium tracking-wider">
            Add New Event
          </h3>
          <CloseButton onClick={() => setEventVisibility(false)} />
        </header>
        <form className="mt-4 w-full">
          <FormField>
            <Label
              className="text-sm text-secondary tracking-wider"
              htmlFor="Event title"
            >
              Event Title
            </Label>
            <Input
              type="text"
              placeholder="e.g. MEXT Interview Prep"
              className="w-full p-3"
            />
          </FormField>
          <div className="flex items-center gap-4 w-full">
            <FormField className="w-full">
              <Label
                className="text-sm text-secondary tracking-wider"
                htmlFor="Date"
              >
                Date
              </Label>
              <Input type="date" className="w-full p-3" />
            </FormField>
            <FormField className="w-full">
              <Label
                className="text-sm text-secondary tracking-wider"
                htmlFor="Time"
              >
                Time
              </Label>
              <Input type="time" className="w-full p-3" />
            </FormField>
          </div>
          <FormField>
            <Label htmlFor="Event category">Event Category</Label>
            <Select data={ApplicationStatusData} />
          </FormField>
        </form>
        <div className="mt-4 flex items-center gap-4 w-full">
          <Button className="p-3 w-full text-sm tracking-wider" aria-label="Save Event Button">
            Save Event
          </Button>
          <Button
            aria-label="Close Event Button"
            className="p-3 w-full border text-sm tracking-wider border-[#dfe1e4] rounded-lg"
            variants="custom"
            onClick={() => setEventVisibility(false)}
          >
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddNewEvent;
