interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({
  title,
  subtitle,
}: SectionTitleProps) => {
  return (
    <div className="space-y-4 mb-14">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;