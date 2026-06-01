export const projects = [
  {
  title: "Distributed Order Management System",
  image: "/projects/distributed-order-system.png",

  description:
    "Built a distributed e-commerce order processing platform using Spring Boot microservices, Apache Kafka, PostgreSQL, and the Saga Orchestration pattern. Implemented asynchronous event-driven communication between Order, Inventory, Payment, and Saga Orchestrator services. Designed compensation workflows for distributed transactions, including inventory release and order cancellation during payment failures. Added DLQ handling, idempotency protection, distributed tracing with MDC, and Kafka-based command/reply messaging for reliable processing.",

  technologies: [
    "Java",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "PostgreSQL",
    "Docker",
    "Saga Pattern",
    "Distributed Systems"
  ],

  github: "https://github.com/dbalmoor/distributed-order-system",
  live: "#",

  highlights: [
    "Implemented Saga Orchestration for distributed transactions",
    "Built event-driven communication using Apache Kafka",
    "Added compensation workflows for failure recovery",
    "Implemented Dead Letter Queue (DLQ) processing",
    "Designed idempotent consumers to prevent duplicate processing",
    "Added distributed tracing using MDC and correlation IDs"
  ]
},

  {
    title: "Enterprise Integration Services",
    description:
      "Backend integration services developed using TIBCO BWCE and JMS/EMS messaging for enterprise telecom workflows and distributed communication systems.",

    technologies: [
      "TIBCO BWCE",
      "JMS",
      "EMS",
      "Oracle",
      "PostgreSQL",
      "Docker",
      "OpenShift",
    ],

    github: "#",
    live: "#",

    highlights: [
      "Implemented enterprise asynchronous messaging flows",
      "Worked on production deployment environments",
      "Handled distributed system integrations",
      "Optimized backend workflows and monitoring",
    ],
  },

  {
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