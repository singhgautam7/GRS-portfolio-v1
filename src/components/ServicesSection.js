import React from 'react';
import { MdCloud, MdCode, MdBuild } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdBuild />}
            title="api creation"
            desc="I create apis with optimised response time and desired access management"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I develop websites with robust and effective backend and gorgeous designs"
          />
          <ServicesSectionItem
            icon={<MdCloud />}
            title="cloud solutions"
            desc="I convert the technical requirements of a project into cloud architecture and design"
          />
          {/* <ServicesSectionItem
            icon={<MdFitnessCenter />}
            title="fitness training"
            desc="I help people plan their diet and workout routines for their fitness journey"
          /> */}
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
