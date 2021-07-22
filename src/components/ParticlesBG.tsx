import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

export const ParticlesBG: React.FC = () => {
  return (
    <>
      <StyledPhotoBG />
      <StyledCoverBG />
      <StyledParticles
        width="100vw"
        height="100vh"
        params={{
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 275.7242757242757,
                "size": 15.984015984015985,
                "duration": 0.959040959040959,
                "opacity": 0.21578421578421578,
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
        }}
      />
    </>
  )
}

const StyledParticles = styled(Particles)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -1;
`;

const StyledCoverBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(21, 21, 21, 0.2);
  z-index: -5;
`;

const StyledPhotoBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: #151515 url('../images/morning-sky.jpg') no-repeat fixed left bottom;
  background-size: cover;
  z-index: -10;
`;
