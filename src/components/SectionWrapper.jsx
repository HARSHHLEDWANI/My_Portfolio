const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

