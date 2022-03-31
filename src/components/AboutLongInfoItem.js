import React from 'react';
import styled from 'styled-components';
import ProjectDuration from './ProjectDuration';

const AboutItemStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 4rem;
  .titles {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .title {
    font-size: 2.4rem;
  }
  .items {
    grid-column: 2 / 5;
    grid-row: 1;
  }
  .item {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    text-align: left;
  }
  .post_para {
    padding: 1rem;
    margin-bottom: 5px;
    border-radius: 8px;
    text-align: left;
    font-size: 1.8rem;
    line-height: 1.3em;
  }
  .items_para {
    margin-bottom: 5px;
    border-radius: 8px;
    text-align: left;
    font-size: 1.8rem;
    line-height: 1.3em;
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    .titles {
      grid-row: 1;
      grid-column: 1;
    }
    .items {
      gap: 1rem;
      grid-row: 2;
      grid-column: 1;
    }
    .title {
      font-size: 2rem;
    }
    .post_para {
      font-size: 1.4rem;
    }
  }
`;

export default function AboutLongInfoItem({
  title = 'Title',
  post = 'Data Engineer',
  items = ['HTML', 'CSS'],
  duration = 'Current',
}) {
  return (
    <AboutItemStyles>
      <div className="titles">
        <h1 className="title">{title}</h1>
        <ProjectDuration duration={duration} />
      </div>
      <div className="items">
        {post !== '' && <p className="post_para">{post}</p>}
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p className="items_para">{item}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
