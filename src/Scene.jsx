import { Float, Html, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Scene = () => {
  const refCube = useRef();

  useFrame(() => {
    refCube.current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight />
      <mesh ref={refCube}>
        <meshStandardMaterial color="orange" />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <Float floatIntensity={8} position={[-15, 0, 3]}>
        <Html transform>
          <iframe
            title="embedd"
            width={500}
            height={700}
            src="https://minesweeper-nine.vercel.app/"
          ></iframe>
        </Html>
      </Float>
      <Float floatIntensity={5} rotationIntensity={1} position={[0, 0, 5]}>
        <Html transform>
          <iframe
            title="embedd"
            width={500}
            height={700}
            src="https://r3f.docs.pmnd.rs/getting-started/introduction"
          ></iframe>
        </Html>
      </Float>
      <Float floatIntensity={5} rotationIntensity={1} position={[15, 0, 3]}>
        <Html transform>
          <iframe
            title="embedd"
            width={500}
            height={700}
            src="https://third-person-camera.vercel.app/"
          ></iframe>
        </Html>
      </Float>
      {/* <OrbitControls /> */}
    </>
  );
};
