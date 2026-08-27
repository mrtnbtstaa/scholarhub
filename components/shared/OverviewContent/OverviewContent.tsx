import Divider from "@/components/shared/Divider/Divider";

interface OverviewProps {
  title: string;
  rightContent: string;
  withDivider?: boolean;
}

const OverviewContent = ({
  title,
  rightContent,
  withDivider = true,
}: OverviewProps) => {
  return (
    <>
      <dl className="flex justify-between items-center p-2">
        <dt className="text-sm text-gray-600 tracking-wide font-normal">
          {title}
        </dt>
        <dd className="text-primary font-semibold tracking-wider md:text-md text-sm">
          {rightContent}
        </dd>
      </dl>
      {withDivider && <Divider className="mx-2" />}
    </>
  );
};

export default OverviewContent;
