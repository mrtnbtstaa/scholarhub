import { MdTimer } from "react-icons/md";

const Deadline = ({content}: {content: string}) => {
  return (
    <div className="inline-flex items-center gap-1">
      <MdTimer className="text-2xl" />
      <p className="font-semibold tracking-wide md:text-md text-sm">
        {content}
      </p>
    </div>
  );
};

export default Deadline;
