import React from 'react';
import { SiPython } from 'react-icons/si';
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
          fill: #ffd43b !important;
        }
      }
    }
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({ icon = <SiPython /> }) {
  return (
    <ItemStyles>
      <a
        href="https://pypi.org/user/singhgautam7/"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        {icon}
      </a>
    </ItemStyles>
  );
}
