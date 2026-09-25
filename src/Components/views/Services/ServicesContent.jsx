import React from "react";
import styled from "styled-components";
import ContentLayout from "../../~reusables/components/ContentLayout";
import { red, tabletMaxWidth, mobileMaxWidth } from "../../~reusables/variables";

// Placeholder services based on Pascal's background — edit freely.
const services = [
  {
    title: "API and Systems Design/Architecture",
    description:
      "Designing and building scalable backend services and APIs for businesses — including microservices, database design, CI/CD pipelines, site reliability engineering and cloud infrastructure design.",
  },
  {
    title: "Fintech & Payments Solutions",
    description:
      "Building payment processing, payout, and reconciliation services, plus KYC/compliance integrations with third-party solutions and financial services.",
  },
  {
    title: "Full-Stack Product Development",
    description:
      "Taking a product from idea to shipped product, built for perfomance and scalability.",
  },
  {
    title: "Technical Leadership & Engineering Advisory",
    description:
      "Fractional CTO / engineering-advisory support: technical strategy, team building and mentorship, code quality standards, and system architecture reviews for early-stage startups.",
  },
];

const ServicesContent = () => {
  return (
    <ContentLayout>
      <PageWrapper>
        <PageHeader>Services</PageHeader>
        <PageIntro>Here's how I can help on your next project.</PageIntro>
        <ServiceGrid>
          {services.map((service, i) => (
            <ServiceCard key={i}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </PageWrapper>
    </ContentLayout>
  );
};

const PageWrapper = styled.div`
  padding-left: 20px;

  @media (max-width: ${mobileMaxWidth}) {
    padding-left: 0;
  }
`;

const PageHeader = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 24px;
  }
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 20px;
  }
`;

const PageIntro = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${tabletMaxWidth}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-top: 3px solid ${red};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  margin: 0;
`;

export default ServicesContent;
