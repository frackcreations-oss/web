// @ts-nocheck
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function GeometricCore() {
    const groupRef = useRef<THREE.Group>(null);
    const crystalsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.15;
            groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
        }
        if (crystalsRef.current) {
            crystalsRef.current.rotation.y = time * -0.2;
            crystalsRef.current.rotation.x = time * 0.1;
            crystalsRef.current.position.y = Math.sin(time) * 0.2;
        }
    });

    return (
        <group ref={groupRef} scale={1.2}>
            {/* Architectural Outer Rings */}
            <mesh rotation-x={Math.PI / 2.2}>
                <torusGeometry args={[2.2, 0.005, 16, 100]} />
                <meshBasicMaterial color="#888888" transparent opacity={0.4} />
            </mesh>
            <mesh rotation-x={Math.PI / 1.8} rotation-y={Math.PI / 8}>
                <torusGeometry args={[2.5, 0.005, 16, 100]} />
                <meshBasicMaterial color="#C8FF00" transparent opacity={0.2} />
            </mesh>

            {/* Inner Dark Matter Crystal */}
            <group ref={crystalsRef}>
                <mesh>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#0A0A0A"
                        metalness={1}
                        roughness={0.1}
                        flatShading
                    />
                </mesh>

                {/* Orbiting Nodes */}
                <mesh position={[1.4, 0, 1.4]}>
                    <icosahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial color="#C8FF00" metalness={0.5} roughness={0.2} flatShading />
                </mesh>
                <mesh position={[-1.7, 0.5, -1]}>
                    <boxGeometry args={[0.15, 0.15, 0.15]} />
                    <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, -1.8, 0.5]}>
                    <tetrahedronGeometry args={[0.2, 0]} />
                    <meshBasicMaterial color="#888888" wireframe />
                </mesh>
            </group>
        </group>
    );
}

export default function CTACanvas() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
                <fog attach="fog" args={['#080808', 4, 12]} />
                <ambientLight intensity={1} color="#ffffff" />
                <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} color="#C8FF00" intensity={4} />
                <GeometricCore />
            </Canvas>
        </div>
    );
}
