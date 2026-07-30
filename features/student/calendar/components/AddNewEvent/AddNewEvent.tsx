"use client";

import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import { ApplicationStatusData } from "@/features/student/my-applications/data/applicationStatus.data";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import { useModalStore } from "@/store/useModalStore";

const AddNewEvent = () => {
  const { setModalVisibility } = useModalStore((state) => state.action);
  return (
    <Modal modalTitle="Add New Event" ButtonLabel="Save Event">
      <form className="mt-4 w-full">
        <FormField>
          <Label
            className="text-sm text-secondary tracking-wider"
            htmlFor="event-title"
          >
            Event Title
          </Label>
          <Input
            id="event-title"
            type="text"
            placeholder="e.g. MEXT Interview Prep"
            className="w-full"
          />
        </FormField>
        <div className="flex items-center gap-4 w-full">
          <FormField className="w-full">
            <Label
              className="text-sm text-secondary tracking-wider"
              htmlFor="date"
            >
              Date
            </Label>
            <Input id="date" type="date" className="w-full" />
          </FormField>
          <FormField className="w-full">
            <Label
              className="text-sm text-secondary tracking-wider"
              htmlFor="time"
            >
              Time
            </Label>
            <Input id="time" type="time" className="w-full" />
          </FormField>
        </div>
        <FormField>
          <Label htmlFor="event-category">Event Category</Label>
          <Select id="event-category" data={ApplicationStatusData} />
        </FormField>
      </form>
      <footer className="mt-4 flex items-center gap-4 w-full">
        <Button
          aria-label="Close Event Button"
          className="p-3 border w-full text-sm tracking-wider border-[#dfe1e4] rounded-lg"
          variants="custom"
          onClick={() => setModalVisibility(false)}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="p-3 text-sm w-full tracking-wider"
          aria-label="Save Event Button"
        >
          Save Event
        </Button>
      </footer>
    </Modal>
  );
};

export default AddNewEvent;
