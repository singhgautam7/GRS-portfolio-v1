import React from 'react';
import styled from 'styled-components';

const ProjectLangTagStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: default;
  .item {
    font-size: 1.5rem;
    background-color: var(--deep-dark-1);
    padding: 0.6rem;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--deep-dark);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
    }
  }
`;

export default function ProjectLangTag({ item = '' }) {
  return (
    <ProjectLangTagStyles>
      <div className="item">
        <p>{item}</p>
      </div>
    </ProjectLangTagStyles>
  );
}
