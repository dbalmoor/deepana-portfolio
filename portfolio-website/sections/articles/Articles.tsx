
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const articles = [
  {
    title: "Kafka vs. JMS: Understanding Messaging in Backend Systems",
    description:
      "An exploration of Kafka and JMS, their messaging models, and the architectural considerations involved when working with asynchronous communication in backend systems.",
    platform: "LinkedIn",
    topics: ["Apache Kafka", "JMS", "Event-Driven Architecture"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7513999261722624000/",
  },
];

const Articles = () => {
  return (
    <section
      id="articles"
      className="border-t border-white/10 py-16 md:py-20"
    >
      <Container>
        <SectionTitle
          subtitle="Knowledge Sharing"
          title="Articles & Technical Writing"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <FadeIn key={article.url}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04] md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-300">
                    <FiBookOpen size={21} />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                    {article.platform}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-7 text-white transition-colors group-hover:text-purple-300 md:text-xl">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {article.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-colors hover:text-purple-200"
                >
                  Read Article
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Articles;
