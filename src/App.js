import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene.jsx";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import Navbar from "./Navbar.jsx";
import LandingPage from "./LandingPage.jsx";
import Marquee from "./Marquee.jsx";
import Projects from "./Projects.jsx";
import HoverImageLinks from "./Services.jsx";
import RevealBento from "./RevealBento.jsx";
import Footer from "./Footer.jsx";
import Contact from "./Contact.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const [fov, setFov] = useState(35); // Default to mobile fov

  useEffect(() => {
    // Function to determine the correct fov based on window width
    const updateFov = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        // Mobile
        setFov(35);
      } else if (width > 768 && width <= 1024) {
        // Tablet
        setFov(30);
      } else {
        // Desktop
        setFov(25);
      }
    };

    // Initial call to set the correct fov
    updateFov();

    // Event listener for window resizing
    window.addEventListener("resize", updateFov);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateFov);
  }, []);

  return (
    <>
      <Navbar />
      <Canvas flat camera={{ fov: fov }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Scene />

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={3.0} // The bloom intensity.
            luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold.
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>

      {/*  */}
      <LandingPage />
      <Marquee />
      <HoverImageLinks />
      <Projects />
      <RevealBento />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
