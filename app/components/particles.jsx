"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, memo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const initParticles = useMemo(() => {
    return async (engine) => {
      await loadSlim(engine);
    };
  }, []);

  useEffect(() => {
    if (!init) {
      initParticlesEngine(initParticles).then(() => {
        setInit(true);
      });
    }
  }, [init, initParticles]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 20,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0707",
        },
        links: {
          color: "#f85611",
          distance: 250,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null; // Wait until particles are initialized

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default memo(ParticlesComponent);
