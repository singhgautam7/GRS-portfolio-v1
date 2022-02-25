import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  display: flex;
  gap: 1.5rem;
  text-align: center;
  background-color: var(--deep-dark-2);
  padding: 1rem 1rem;
  border-radius: 0.7rem;
  cursor: default;
  transition: 0.3s ease transform;
  &:hover {
    transform: scale(1.1);
  }
  .servicesItem__icon {
    border-radius: 3rem;
    svg {
      width: 2rem;
    }
  }
  .servicesItem__title {
    font-size: 1.5rem;
  }
`;

export default function SolutionSectionItem({
  icon = <MdDesktopMac />,
  title = 'Solution',
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <p className="servicesItem__title">{title}</p>
    </ItemStyles>
  );
}
