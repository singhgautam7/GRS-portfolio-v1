import React from 'react';
import styled from 'styled-components';

const ProjectLinksStyles = styled.div`
  text-align: center;
  .projectIconItem__a {
    font-size: 1.3rem;
    margin: 0.5em 0em;
    display: inline-block;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    .projectIconItem__a {
      font-size: 1.8rem;
    }
`;

export default function ProjectLinks({ title = '', link = '' }) {
  return (
    <ProjectLinksStyles className="servicesItem">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="projectIconItem__a"
      >
        {title}
      </a>
    </ProjectLinksStyles>
  );
}
