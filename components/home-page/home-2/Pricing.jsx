"use client";

import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Backend Development",
    billing: "The Engine Behind the App",
    features: [
      { heading: "Languages & Frameworks", items: ["Node.js", "Express.js", "NestJS", "Python (FastAPI, Django)", "GoLang"] },
      { heading: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis (caching)", "Firebase Realtime DB"] },
      { heading: "APIs", items: ["REST", "GraphQL", "gRPC"] },
      { heading: "Authentication & Security", items: ["JWT", "OAuth2", "Passport.js", "Keycloak"] },
      { heading: "Messaging & Queues", items: ["RabbitMQ", "Kafka", "AWS SQS"] },
      { heading: "Testing", items: ["Jest", "Mocha", "Supertest"] },
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Frontend & UI/UX Development",
    billing: "Design Meets Performance",
    features: [
      { heading: "Frameworks", items: ["React.js", "Next.js", "Angular", "Vue.js (optional)"] },
      { heading: "Styling & UI", items: ["Tailwind CSS", "Material UI", "Chakra UI", "Bootstrap", "Styled Components"] },
      { heading: "State Management", items: ["Redux Toolkit", "Zustand", "MobX", "React Query", "Apollo Client"] },
      { heading: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"] },
      { heading: "Animations", items: ["Framer Motion", "GSAP"] },
      { heading: "Testing", items: ["Jest", "React Testing Library", "Cypress"] },
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  {
    id: 3,
    name: "Deployment & DevOps",
    billing: "From Code to Cloud",
    features: [
      { heading: "Cloud Providers", items: ["AWS (EC2, S3, Lambda, RDS)", "Google Cloud", "Azure", "DigitalOcean", "Vercel", "Netlify"] },
      { heading: "CI/CD", items: ["GitHub Actions", "GitLab CI", "CircleCI", "Jenkins"] },
      { heading: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm"] },
      { heading: "Infrastructure as Code (IaC)", items: ["Terraform", "Ansible", "Pulumi"] },
      { heading: "Monitoring & Logging", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
      { heading: "CDN & Performance", items: ["Cloudflare", "AWS CloudFront", "Akamai"] },
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  {
    id: 4,
    name: "Maintenance & Support",
    billing: "We’re With You, Always",
    features: [
      { heading: "Version Control & Collaboration", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
      { heading: "Error Tracking", items: ["Sentry", "LogRocket", "Rollbar"] },
      { heading: "Performance Auditing", items: ["Google Lighthouse", "GTmetrix", "WebPageTest"] },
      { heading: "Security Tools", items: ["OWASP ZAP", "Burp Suite", "SSL/TLS", "Cloudflare Security"] },
      { heading: "Analytics & Insights", items: ["Google Analytics", "Mixpanel", "Hotjar"] },
      { heading: "CI Monitoring", items: ["PagerDuty", "Opsgenie", "UptimeRobot"] },
    ],
    bgColor: "#E4F4F1",
    animDelay: "300",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      {plans.map((plan) => (
        <div
          key={plan.id}
          style={{
            flex: "1 1 calc(25% - 20px)", // 4 cards in a row
            minWidth: "250px", // responsive fallback
            display: "flex",
          }}
        >
          <div
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "100%",
              padding: "20px",
              borderRadius: "12px",
              background: "#fff",
            }}
          >
            <div className="pack-name fw-600 tx-dark" style={{ fontSize: "18px" }}>
              {plan.name}
            </div>

            <div
              className="top-banner align-items-center d-md-flex mt-20"
              style={{
                background: plan.bgColor,
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <div>
                <span
                  className="fw-500"
                  style={{ fontSize: "16px", alignContent: "center" }}
                >
                  {plan.billing}
                </span>
              </div>
            </div>

            <ul
              className="pr-feature style-none mt-3"
              style={{ marginTop: "15px", flexGrow: 1 }}
            >
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2" style={{ marginBottom: "10px" }}>
                  <div className="fw-600" style={{ fontSize: "16px" }}>
                    {feature.heading}:
                  </div>
                  <div
                    className="text-muted"
                    style={{ fontSize: "13px", marginLeft: "8px" }}
                  >
                    {feature.items.join(", ")}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;