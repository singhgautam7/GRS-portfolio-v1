import React from 'react';
import { SiGmail } from 'react-icons/si';
import styled from 'styled-components';

const ItemStyles = styled.div`
  padding: 1rem;
  display: inline-block;
  border-radius: 8px;
  .icon {
    color: var(--white);
    background-color: var(--deep-dark-2);
    padding: 1.3rem;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: #ffffff;
      svg {
        path {
          fill: #b23121 !important;
        }
      }
    }
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({ icon = <SiGmail /> }) {
  return (
    <ItemStyles>
      <a
        href="mailto:gautamsingh1997@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        {icon}
      </a>
    </ItemStyles>
  );
}
