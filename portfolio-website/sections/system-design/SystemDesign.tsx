import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { systemDesign } from "@/constants/systemDesign";

const SystemDesign = () => {
  return (
    <section
      id="system-design"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="System Design"
          title={systemDesign.title}
        />

        <p className="max-w-4xl text-lg leading-relaxed text-neutral-400">
          {systemDesign.description}
        </p>

        {/* Architecture Flow */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div className="flex flex-col items-center gap-4 text-center">

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-6 py-3">
              API Gateway
            </div>

            <span>↓</span>

            <div className="rounded-xl border border-white/10 px-6 py-3">
              Authentication Service
            </div>

            <span>↓</span>

            <div className="rounded-xl border border-white/10 px-6 py-3">
              Order Service
            </div>

            <span>↓</span>

            <div className="rounded-xl border border-white/10 px-6 py-3">
              Payment Service
            </div>

            <span>↓</span>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-6 py-3">
              Kafka / JMS
            </div>

            <span>↓</span>

            <div className="rounded-xl border border-white/10 px-6 py-3">
              Notification Service
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12">
          <h3 className="mb-6 text-xl font-semibold">
            Key Engineering Concepts
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {systemDesign.highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Components */}
        <div className="mt-12 flex flex-wrap gap-3">
          {systemDesign.components.map((component, index) => (
            <span
              key={index}
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
            >
              {component}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SystemDesign;