import Button from "@/components/ui/Button/Button";

const ActionButton = ({ actionTitle }: { actionTitle: string }) => {
  return (
    <Button
      variants="custom"
      className="bg-white rounded-lg w-full p-4 border border-[#c5c7cf] transition-colors duration-150 ease-in-out hover:bg-[#eff5fe] tracking-wider md:text-md text-sm font-medium"
    >
      {actionTitle}
    </Button>
  );
};

export default ActionButton;
