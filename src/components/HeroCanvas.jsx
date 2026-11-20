import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const HeroShape = () => {
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh visible position={[0, 0, 0]}>
                <sphereGeometry args={[1, 48, 48]} />
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.45}
                    speed={1.5}
                />
            </mesh>
        </Float>
    );
};

const HeroCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 25 }}
            dpr={[1, 1.5]}
            gl={{ powerPreference: 'high-performance' }}
            className="w-full h-full absolute inset-0 z-[-1]"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <HeroShape />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default HeroCanvas;
