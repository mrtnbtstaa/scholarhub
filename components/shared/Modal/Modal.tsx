import Card from "@/components/shared/Card/Card";
import CloseButton from "@/components/shared/CloseButton/CloseButton";
import { cn } from "@/lib/helpers/cn";
import { useDisableScroll } from "@/hooks/useDisableScroll";
import { useModalStore } from "@/store/useModalStore";
import { useId } from "react";

const Modal = ({
  modalTitle,
  children,
}: {
  modalTitle: string;
  ButtonLabel: string;
  children: React.ReactNode;
}) => {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const { setModalVisibility } = useModalStore((state) => state.action);
  const titleId = useId();

  useDisableScroll(isModalOpen);

  if (!isModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={cn(
        "bg-[#788897]/70 min-h-full w-full fixed left-0 top-0 z-1000 transition-transform duration-300 ease-in-out backdrop-blur-xs overflow-hidden items-center justify-center",
        isModalOpen ? "flex" : "hidden",
      )}
    >
      <Card className="flex flex-col h-full items-start justify-center rounded-2xl bg-white md:w-150 w-100">
        {/* Modal Header */}
        <header className="flex items-center justify-between w-full p-4">
          <h3 className="text-md text-secondary font-semibold tracking-wider">
            {modalTitle}
          </h3>
          <CloseButton onClick={() => setModalVisibility(false)} />
        </header>
        {/* Modal Header */}
        {/* Modal Main Content */}
        <div className="w-full">{children}</div>
        {/* Modal Main Content */}
      </Card>
    </div>
  );
};

export default Modal;
