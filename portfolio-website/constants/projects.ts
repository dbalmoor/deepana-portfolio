
type Project = {
  featured: boolean;
  title: string;
  description: string;
  problem?: string;
  image?: string;
  workflowImage?: string;
  architecture?: string[];
  technologies: string[];
  engineeringChallenges?: string[];
  highlights: string[];
  designDecisions?: {
    title: string;
    description: string;
  }[];
  limitations?: string[];
  github?: string;
  live?: string;
  kafkaJmsPost?: string;
  designDoc?: string;
};

export const projects: Project[] = [
  {
    featured: true,
    title: "Distributed Order Management System",

    description:
      "An event-driven order processing platform built with Java 17, Spring Boot, and Apache Kafka. Order, Inventory, Payment, and Saga Orchestrator services own separate PostgreSQL databases, while a gateway routes client requests. A persisted Saga coordinates the workflow, and transactional outboxes and idempotent consumers support reliable asynchronous processing.",

    problem:
      "Order processing spans independently managed services and databases. A service can fail midway through a workflow, and messages can be duplicated, delayed, or arrive out of order. The system must recover from partial failures without distributed database transactions.",

    image: "/projects/distributed-order-system-architecture.png",
    workflowImage: "/projects/distributed-order-system-saga-flows.png",

    architecture: [
      "Gateway Service — routes client requests to backend services",
      "Order Service — owns order state and confirm/cancel commands",
      "Inventory Service — reserves and releases stock",
      "Payment Service — simulates charges and refunds with idempotency",
      "Saga Orchestrator — persists workflow state and coordinates compensation",
      "Transactional Outbox — stores outgoing messages in the local transaction",
      "Kafka — transports commands, events, retry topics, and dead-letter topics",
      "Database Ownership — independent PostgreSQL databases with Flyway migrations",
      "Saga Watchdog — monitors step deadlines and retries stalled workflows",
      "Operator APIs — retry workflows or force-resolve eligible sagas",
    ],

    technologies: [
      "Java 17",
      "Spring Boot 3.2.5",
      "Spring Kafka",
      "Spring Data JPA",
      "Apache Kafka (KRaft)",
      "PostgreSQL",
      "Flyway",
      "Maven",
      "Testcontainers",
      "Docker Compose",
      "Saga Pattern",
    ],

    engineeringChallenges: [
      "Transactional outbox: commits local state changes and outgoing messages in one database transaction. A lease-based poller claims rows using FOR UPDATE SKIP LOCKED and publishes them to Kafka.",
      "Idempotent consumers: processed-message records, payment idempotency keys, and inventory release markers protect against duplicate and late events.",
      "Saga recovery: per-step deadlines and retry policies recover stalled workflows; exhausted retries move the saga to NEEDS_ATTENTION.",
      "Payment pivot: failures before payment success can trigger compensation. After payment success, the workflow retries order confirmation rather than reversing a successful payment.",
      "Compensation ordering: payment failure releases inventory, and order cancellation follows the required compensation acknowledgement.",
      "Dead-letter recovery: retry topics and dead-letter topics isolate failed messages; admin endpoints support replay after a fix.",
      "Observability: correlation IDs and MDC connect log entries across asynchronous service interactions.",
    ],

    designDecisions: [
      {
        title: "Orchestration over choreography",
        description:
          "A persisted orchestrator owns workflow progression, timeouts, and compensation order. This makes recovery explicit while adding a central component to maintain.",
      },
      {
        title: "Outbox over dual writes",
        description:
          "Business state and outgoing messages are persisted in the same local database transaction. A poller handles delivery to Kafka with at-least-once semantics.",
      },
      {
        title: "At-least-once delivery with idempotency",
        description:
          "Consumers tolerate duplicate delivery instead of relying on an exactly-once processing guarantee.",
      },
      {
        title: "Payment success as the pivot",
        description:
          "Before payment success, failures can trigger compensation. After success, the saga moves forward by retrying order confirmation.",
      },
      {
        title: "Concurrency and recovery controls",
        description:
          "Database locking, saga deadlines, retry budgets, and operator recovery help control concurrent updates and stalled workflows.",
      },
    ],

    limitations: [
      "Payment is a deterministic simulation, not a real payment-provider integration.",
      "Authentication and authorization are not implemented; gateway and administrative endpoints are currently unauthenticated.",
      "OpenTelemetry tracing, Prometheus metrics, and Grafana dashboards are not implemented; correlation IDs and MDC provide log correlation.",
      "POST /orders does not yet support a client-facing Idempotency-Key contract.",
      "Inventory reservation uses row locking rather than an atomic conditional decrement.",
      "Dedicated automated coverage is still missing for orchestrator crash recovery, duplicate inventory reservation, and end-to-end dead-letter routing/replay.",
      "Kafka topic configuration uses a single replica, suitable for local development rather than production resilience.",
    ],

    github:
      "https://github.com/dbalmoor/distributed-order-system",

    highlights: [
      "Saga orchestration coordinates order, inventory, and payment workflows, including compensation for failures.",
      "Transactional outbox, idempotent event handling, retries, and dead-letter topics improve reliability during asynchronous processing.",
      "Per-service PostgreSQL databases, Flyway migrations, and Testcontainers integration tests support database isolation and verification.",
    ],
    kafkaJmsPost: "https://www.linkedin.com/feed/update/urn:li:activity:7513999261722624000/",
    designDoc: "https://github.com/dbalmoor/distributed-order-system/blob/main/design.md",
  },
];
