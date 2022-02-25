import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      max-width: 600px; # Originally 900px
      width: 100%;
      height: 600px;
      margin: 0 auto;
      border: 2px solid var(--gray-1);
      filter: grayscale(90%);
      transition: 0.3s ease filter;
      &:hover, &:active {
        filter: grayscale(0%);
      }
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Gautam Singh</span>
              </p>
              <h2 className="about__heading">
                A Google Certified Professional Data Engineer
              </h2>
              <div className="about__info">
                <PText>
                  I am a Computer Science and Engineering graduate with a zest
                  for learning new technologies and overcoming challenges. Major
                  part of my career involves me working as a Backend Developer
                  using Django Framework. Currently, I am working as a Data
                  Engineer after acquiring my certification as a Google Cloud
                  Platform Professional Data Engineer.
                  <br />
                  <br />
                  Moreover, I also have a brief experience in creating Android
                  apps in the initial stages of my bachelor degree, and working
                  as a front-end developer for few months to finish up some
                  modules in VueJS.
                  <br />
                  <br />
                  When I am not coding, I usually like working out to increase
                  my strength, develop a better body balance and sometimes
                  learning facts about things that intrigue me.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://github.com/singhgautam7/singhgautam7/raw/main/assets/GRS_resume.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Kendriya Vidyalaya 1, Raipur(CG)']}
              />
              <AboutInfoItem
                title="Collage"
                items={['SSGI, Junwani, Bhilai(CG)']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="BackEnd" items={['Django', 'Flask']} />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'REACT', 'VueJs']}
              />
              <AboutInfoItem title="Cloud" items={['Google Cloud', 'AWS']} />
              <AboutInfoItem
                title="Other"
                items={['Python', 'Terraform', 'Ubuntu']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Data Eng."
                items={['Dec 2021 - Current', 'SpringML']}
              />
              <AboutInfoItem
                title="SDE - 1"
                items={['Oct 2019 - Dec 2021', 'CodeNicely']}
              />
              <AboutInfoItem
                title="BDA"
                items={['Jun 2019 - Sept 2019', "Byju's"]}
              />
              <AboutInfoItem
                title="BDA Intern"
                items={['Jan 2019 - April 2019', "Byju's"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
