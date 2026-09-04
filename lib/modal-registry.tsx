import { ReactNode } from "react";
import LoginModal from "@/features/auth/components/modal/LoginModal";
import RegisterModal from "@/features/auth/components/modal/RegisterModal";
import AddNewEvent from "@/features/student/calendar/components/AddNewEvent/AddNewEvent";
import CreateScholarshipModal from "@/features/admin/(scholarships)/scholarships/components/CreateScholarshipModal";
import { ActiveModalType, ModalType } from "@/store/useModalStore";
import { ModalComponentProps } from "@/types/shared/modal.types";


const MODAL_REGISTRY: Record<
  ActiveModalType,
  (props: ModalComponentProps) => ReactNode
> = {
  "login": (props) => <LoginModal {...props} />,
  "register": (props) => <RegisterModal {...props} />,
  "create-event": (props) => <AddNewEvent {...props} />,
  "create-scholarship": (props) => <CreateScholarshipModal {...props} />,
};

export const renderModal = (type: ModalType, props: ModalComponentProps) => {
  if (!type || !(type in MODAL_REGISTRY)) {
    return null;
  }
  return MODAL_REGISTRY[type as ActiveModalType](props);
};
