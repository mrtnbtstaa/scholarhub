"use client";

import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import { ModalComponentProps } from "@/types/shared/modal.types";
import { FC } from "react";
import TextArea from "@/components/ui/TextArea/TextArea";
import { useCreateCalendarEvent } from "../../hooks/use-events";
import { GenericSelect } from "@/types/shared/select.types";

export const eventStatus: GenericSelect[] = [
  {
    label: "Scholarship Deadline",
    value: "scholarship deadline",
  },
  {
    label: "Personal Goal",
    value: "personal goal",
  },
  {
    label: "Document Due Date",
    value: "document due date",
  },
  {
    label: "Others",
    value: "others",
  },
];

const AddNewEvent: FC<ModalComponentProps> = ({ onClose }) => {
  const { form, handleSubmit, isPending, error } = useCreateCalendarEvent();
  return (
    <Modal modalTitle="Add New Event" onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-full"
      >
        <FormField className="mx-4" error={error.event_title}>
          <Label
            isRequired={true}
            className="text-sm text-secondary tracking-wider"
            htmlFor="eventTitle"
          >
            Event Title
          </Label>
          <Input
            id="eventTitle"
            type="text"
            placeholder="e.g. MEXT Interview Prep"
            className="w-full"
            {...form.register("event_title")}
          />
        </FormField>
        <div className="flex items-center gap-4 w-full">
          <FormField className="w-full ml-4" error={error.event_date}>
            <Label
              isRequired={true}
              className="text-sm text-secondary tracking-wider"
              htmlFor="date"
            >
              Date
            </Label>
            <Input
              id="date"
              type="date"
              className="w-full"
              {...form.register("event_date")}
            />
          </FormField>
          <FormField className="w-full mr-4" error={error.event_time}>
            <Label
              isRequired={true}
              className="text-sm text-secondary tracking-wider"
              htmlFor="time"
            >
              Time
            </Label>
            <Input
              id="time"
              type="time"
              className="w-full"
              {...form.register("event_time")}
            />
          </FormField>
        </div>
        <FormField className="mx-4" error={error.event_category}>
          <Label isRequired={true} htmlFor="event-category">
            Event Category
          </Label>
          <Select
            id="event-category"
            data={eventStatus}
            {...form.register("event_category")}
          />
        </FormField>
        <FormField className="mx-4">
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            placeholder="Add description..."
            {...form.register("description")}
          />
        </FormField>
        <footer className="flex items-center gap-4 w-full p-4">
          <Button
            type="button"
            aria-label="Close Event Button"
            className="p-3 border w-full text-sm tracking-wider border-[#dfe1e4] rounded-lg"
            variants="custom"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            isLoading={isPending}
            type="submit"
            className="p-3 text-sm w-full tracking-wider"
            aria-label="Save Event Button"
          >
            Save Event
          </Button>
        </footer>
      </form>
    </Modal>
  );
};

export default AddNewEvent;
