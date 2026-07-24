const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-4 transition-all duration-200 overflow-x-hidden">{children}</section>
  );
};

export default Section;
