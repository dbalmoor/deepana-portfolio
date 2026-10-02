interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({
  title,
  subtitle,
}: SectionTitleProps) => {
  return (
    <div className="mb-14 space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-purple-300/80">
        {subtitle}
      </p>

      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-purple-500/70 to-transparent md:block" />
      </div>
    </div>
  );
};

export default SectionTitle;