type Project = {
  featured: boolean;
  title: string;
  description: string;
  problem?: string;
  image?: string;
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
};

export const projects: Project[] = [
  {
    featured: true,

    title: "Distributed Order Management System",

    image: "/projects/distributed-order-system.png",

    description:
      "An event-driven order processing platform built with four Spring Boot services: Order, Inventory, Payment, and Saga Orchestrator. Services own their PostgreSQL databases and communicate asynchronously through Apache Kafka, with Saga orchestration coordinating the workflow.",

    problem:
      "Order processing spans multiple services, each with its own database. A service can fail midway through a workflow, and Kafka messages may be duplicated or arrive late. The challenge is to preserve business consistency and recover from partial failures without distributed database transactions.",

    architecture: [
      "Order Service — manages order state",
      "Inventory Service — coordinates stock reservation and release",
      "Payment Service — simulates payment processing",
      "Saga Orchestrator — coordinates workflow steps and compensation",
      "Apache Kafka — transports commands, events, and asynchronous messages",
      "Transactional Outbox — coordinates database changes with outgoing events",
      "Retry and Dead-Letter Handling — isolates messages that repeatedly fail",
      "Correlation IDs and MDC — follow requests across service logs",
    ],

    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Spring Data JPA",
      "Apache Kafka",
      "PostgreSQL",
      "Flyway",
      "Testcontainers",
      "Docker Compose",
      "Saga Pattern",
    ],

    engineeringChallenges: [
      "Saga orchestration coordinates multi-service workflows and compensation without relying on a distributed database transaction.",
      "The transactional outbox pattern is designed to prevent a database update and its corresponding outgoing event from becoming inconsistent.",
      "Idempotent event handling helps protect business state when messages are delivered more than once.",
      "Late and out-of-order inventory events require safeguards so a delayed reservation cannot undo an earlier release.",
      "Retry and dead-letter handling provide a path for isolating failed messages and investigating messages that cannot be processed.",
      "Correlation IDs and MDC make it easier to connect log entries across asynchronous service calls.",
    ],

    designDecisions: [
      {
        title: "Orchestration over choreography",
        description:
          "A central orchestrator owns workflow progression, timeouts, and compensation order. This improves visibility into the workflow but introduces another component to maintain.",
      },
      {
        title: "Outbox over dual writes",
        description:
          "Persisting business state and an outgoing event in the same database transaction avoids relying on two independent writes to PostgreSQL and Kafka.",
      },
      {
        title: "At-least-once delivery with idempotency",
        description:
          "The design tolerates duplicate message delivery rather than assuming that every event is processed exactly once.",
      },
      {
        title: "Concurrency control",
        description:
          "Inventory locking and version-based concurrency control help protect state when multiple operations affect the same order or stock.",
      },
    ],

    limitations: [
      "Payment processing is simulated rather than connected to a real payment provider.",
      "Gateway and administrative API authentication are not implemented yet.",
      "OpenTelemetry-based distributed tracing and production metrics are not implemented yet; correlation IDs and MDC are used for log correlation.",
      "A client-facing Idempotency-Key API contract and atomic conditional stock decrement remain future work.",
      "Database migration validation and the full integration test suite still need to be verified against a running PostgreSQL and Kafka environment.",
    ],

    github:
      "https://github.com/dbalmoor/distributed-order-system",

    live: "#",

    highlights: [
      "Coordinates order, inventory, and payment workflows using the Saga pattern.",
      "Uses Kafka for asynchronous communication between services.",
      "Designs compensation paths for recovering from partial workflow failures.",
      "Uses idempotency safeguards to handle duplicate events.",
      "Includes retry and dead-letter handling for failed messages.",
      "Uses correlation IDs and MDC to connect logs across services.",
    ],
  },

  {
    featured: false,

    title: "Workout Tracking Application",

    description:
      "A full-stack MERN application for workout tracking, combining REST APIs, authentication workflows, and a responsive React frontend.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
    ],

    github: "#",

    live: "#",

    highlights: [
      "Built RESTful backend APIs for application workflows.",
      "Implemented authentication workflows.",
      "Integrated frontend components with backend APIs.",
      "Developed a responsive interface using React.",
    ],
  },
];