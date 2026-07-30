import Image from "next/image";

const Avatar = ({ source }: { source: string }) => {
  return (
    <div className="w-18 h-18 relative">
      <Image
        alt=""
        src={source}
        loading="eager"
        priority
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );
};

export default Avatar;
