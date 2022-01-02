import Particles from 'react-particles-js';

const HomeParticle = () => {
  return (
    <Particles
        className="login_particles"
        params={{
        "particles": {
            "number": {
                "value": 250,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
        }}
    />

  );
};

export default HomeParticle;