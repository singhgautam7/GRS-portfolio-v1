import React from 'react';
import styled from 'styled-components';

const ProjectDurationStyles = styled.div`
  .projectIconItem__p {
    font-size: 1.2rem;
    display: inline-block;
    font-style: italic;
    opacity: 0.5;
  }
  @media only screen and (max-width: 768px) {
    .projectIconItem__p {
      font-size: 1.3rem;
    }
`;

export default function ProjectDuration({ duration = '' }) {
  return (
    <ProjectDurationStyles className="servicesItem">
      <p className="projectIconItem__p">{duration}</p>
    </ProjectDurationStyles>
  );
}
