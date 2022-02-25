import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Gautam Singh</h1>
          <PText>Google Certified Professional Data Engineer</PText>
          <PText>Full-Stack Developer</PText>
          <PText>Fitness Enthusiast</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'gautamsingh1997@live.com',
                path: 'mailto:gautamsingh1997@live.com',
              },
              {
                title: 'Raipur(CG), India',
                path:
                  'https://www.google.com/maps/place/Raipur,+Chhattisgarh/@21.2620511,81.5490323,12z/data=!3m1!4b1!4m5!3m4!1s0x3a28dda23be28229:0x163ee1204ff9e240!8m2!3d21.2513844!4d81.6296413',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/singhgautam7/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/singhgautam7',
              },
              {
                title: 'Medium',
                path: 'https://medium.com/@singhgautam7',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/singhgautam7/',
              },
              {
                title: 'YouTube',
                path: 'https://www.youtube.com/watch?v=g0OA1Le593c',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © {new Date().getFullYear()} - Gautam Singh | Inspired By{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              webcifar
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
