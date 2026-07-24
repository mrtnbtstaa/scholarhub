import Button from "@/components/ui/Button/Button";
import { MdClose } from "react-icons/md";

const CloseButton = ({onClick}: {onClick?: () => void;}) => {
  return (
    <Button
      onClick={onClick}
      aria-label="Close Sidebar Button"
      variants="custom"
      className="hover:bg-[#e4efff] p-2 transition-colors duration-150 ease-in-out rounded-full"
    >
      <MdClose />
    </Button>
  );
};

export default CloseButton;
