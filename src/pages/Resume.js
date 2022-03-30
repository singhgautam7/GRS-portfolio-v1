import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ResumeStyle = styled.div``;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Projects() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  console.log('windowDimensions', windowDimensions);

  return (
    <>
      <ResumeStyle>
        <div>
          {windowDimensions.width < 768 ? (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingTop: '500.0000%',
                paddingBottom: '48px',
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform',
              }}
            >
              <iframe
                title="GRS CV"
                loading="lazy"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0,
                }}
                src="https://www.canva.com/design/DAE8bX0dhf4/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              />
            </div>
          ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingTop: '141.4286%',
                paddingBottom: '48px',
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform',
              }}
            >
              <iframe
                title="GRS CV"
                loading="lazy"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0,
                }}
                src="https://www.canva.com/design/DAE8YL789Is/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              />
            </div>
          )}
        </div>
      </ResumeStyle>
    </>
  );
}
