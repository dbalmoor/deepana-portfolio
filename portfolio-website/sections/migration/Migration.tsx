import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const migrationPoints = [
  "Onsite engagement in Jakarta",
  "Hypercare support",
  "Production readiness validation",
  "Go-live monitoring",
  "Migration waves involving 40+ million subscribers",
  "Cross-functional collaboration with business and engineering teams",
];

const Migration = () => {
  return (
    <section id="migration" className="py-32 border-t border-white/10">
      <Container>
        <FadeIn>
          <SectionTitle
            subtitle="Migration"
            title="Large-Scale Subscriber Migration"
          />

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <p className="max-w-4xl text-lg leading-relaxed text-neutral-300">
              Supported migration and go-live activities for the DMP
              Consolidation platform at Indosat Ooredoo Hutchison (IOH),
              Indonesia.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {migrationPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-neutral-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Migration;
