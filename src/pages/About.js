import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutLongInfoItem from '../components/AboutLongInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    animation-duration: 1s;
    animation-name: fadeIn;
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
      animation: fadeIn 2s, colorIn 8s;
      -webkit-animation-fill-mode: forwards;
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
                btnLink="https://github.com/singhgautam7/singhgautam7/raw/main/assets/GRS_resume_dark.pdf"
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
                title="10th Std"
                items={['9.4 CGPA', 'Kendriya Vidyalaya 1, Raipur(CG)']}
              />
              <AboutInfoItem
                title="12th Std"
                items={['87.6%', 'Kendriya Vidyalaya 1, Raipur(CG)']}
              />
              <AboutInfoItem
                title="College"
                items={['70.6%', 'SSGI, Junwani, Bhilai(CG)']}
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
              <AboutLongInfoItem
                title="SpringML"
                post="Data Engineer"
                duration="Dec 2021 - Current"
                items={[
                  "Devoted time to work on Google cloud platform and it's resources.",
                  'Utilized Infrastructure as a code tool (like terraform) to seamlessly manage the resource management in cloud.',
                  'Adapted microservice architecture in some projects to increase flexibility.',
                ]}
              />
              <AboutLongInfoItem
                title="CodeNicely"
                post="Software Development Engineer - 1"
                duration="Oct 2019 - Dec 2021"
                items={[
                  "Developed back-end from scratch on one of CodeNicely's biggest project.",
                  "Fashioned web-applications as per client's demands and expectations.",
                  'Spearheaded a team of 4 people to design and develop projects on different platorms.',
                  'Managed clients personally and noted their feedbacks for delopment and quality assurance.',
                  'Mentored new django developers in the company.',
                  "Interviewed new applicants and shortlisted them as per company's requirements.",
                ]}
              />
              <AboutLongInfoItem
                title="Byju's"
                post="Business Development Associalte"
                duration="Jan 2019 - Sept 2019"
                items={[
                  'Regularly and effectively met warm calling targets, 2.5-3 hours call time per day.',
                  "Accelerated company's growth by achieving a target revenue of 1.5L-2L per week.",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">
                Certifications and Achievements
              </h1>
              <AboutLongInfoItem
                title="Google"
                post=""
                duration=""
                items={[
                  'Google Cloud Platform Certified Professional Data Engineer.',
                ]}
              />
              <AboutLongInfoItem
                title="Scalablility"
                post=""
                duration=""
                items={[
                  'Designed backend system for an e-commerce business to manage 42k customers at once.',
                ]}
              />
              <AboutLongInfoItem
                title="Diversified"
                post=""
                duration=""
                items={[
                  'Diversified my technical experience by creating chat application, wallets, ecommerce application, promo code management system, order management system, microservice architecture etc.',
                ]}
              />
              <AboutLongInfoItem
                title="Integrations"
                post=""
                duration=""
                items={[
                  'Integrated third-party APIs like , payment gateway(Razorpay), calling(Ezetap, Twilio), sms(MSG91, BulkSMS), accounts and ledger(Zoho Books), locations(google maps, locus) etc.',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
