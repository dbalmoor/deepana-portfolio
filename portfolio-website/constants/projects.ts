export const projects = [
  {
    featured: true,

    title: "Distributed Order Management System",

    image: "/projects/distributed-order-system.png",

    problem:
      "Built a distributed e-commerce order processing platform that demonstrates reliable transaction management across multiple microservices using Saga Orchestration and Apache Kafka.",

    description:
      "Developed an event-driven distributed system using Spring Boot microservices, Apache Kafka, PostgreSQL, and Docker. The platform coordinates Order, Inventory, Payment, and Saga Orchestrator services while maintaining consistency through compensation transactions and asynchronous communication.",

    architecture: [
      "Order Service",
      "Inventory Service",
      "Payment Service",
      "Saga Orchestrator",
      "Kafka Commands & Events",
      "Compensation Transactions",
      "DLQ Processing",
      "Distributed Tracing",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Apache Kafka",
      "PostgreSQL",
      "Docker",
      "Saga Pattern",
      "Distributed Systems",
    ],
    engineeringChallenges: [
      "Ensured transaction consistency across multiple microservices without relying on distributed database transactions.",
      "Designed compensation workflows to recover safely from payment failures and maintain system consistency.",
      "Prevented duplicate event processing using idempotent consumer patterns.",
      "Implemented Dead Letter Queue (DLQ) handling and retry mechanisms for failed Kafka messages.",
      "Added correlation IDs and distributed tracing to improve observability across asynchronous workflows.",
      "Coordinated service interactions through Saga Orchestration while maintaining loose coupling between services."
    ],

    github: "https://github.com/dbalmoor/distributed-order-system",

    live: "#",

    highlights: [
      "Implemented Saga Orchestration for distributed transactions",
      "Built event-driven communication using Apache Kafka",
      "Added compensation workflows for failure recovery",
      "Implemented Dead Letter Queue (DLQ) processing",
      "Designed idempotent consumers to prevent duplicate processing",
      "Added distributed tracing using MDC and correlation IDs",
    ],
  },

  {
    featured: false,

    title: "Workout Tracking Application",

    description:
      "Full-stack MERN application for workout tracking with REST APIs, authentication, and responsive frontend architecture.",

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
      "Built complete RESTful backend APIs",
      "Implemented authentication workflows",
      "Integrated frontend and backend architecture",
      "Responsive UI with React",
    ],
  },
];