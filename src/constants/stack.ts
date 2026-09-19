import type { StackGroup } from "./types";

/** Technologies affichées dans la section « Technologies ». */
export const STACK_GROUPS: StackGroup[] = [
  {
    title: "Infrastructure & exploitation",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Nginx",
      "Linux",
      "AWS",
      "OVH",
      "HOSTINGER",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Intégration continue",
    items: [
      "GitLab CI",
      "GitHub Actions",
      "Jenkins",
      "Environnements éphémères",
    ],
  },
  {
    title: "Backend & données",
    items: [
      "Laravel",
      "Symfony",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
    ],
  },
  {
    title: "Frontend & mobile",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
      "Flutter",
      "React Native",
      "Zustand",
      "Playwright",
    ],
  },
];
