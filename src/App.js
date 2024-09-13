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

const App = () => {
  return (
    <>
      <Navbar />
      <Canvas flat camera={{ fov: 25 }}>
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
      <div className="w-full bg-black py-32">
        <h1 className="text-white">Welcome to my portfolio</h1>
      </div>
    </>
  );
};

export default App;
