// @ts-nocheck
'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function DigitalSand() {
    const count = 500;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Non-blocking global mouse tracking to prevent UI click stealing
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate random floating Animus shard data
    const shards = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const pos = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15 - 5
            );
            arr.push({
                position: pos,
                velocity: new THREE.Vector3(0, 0, 0),
                rotation: new THREE.Vector3(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ),
                speed: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.002,
                    Math.random() * 0.005 + 0.002, // Magically slowed down
                    (Math.random() - 0.5) * 0.002
                ),
                rotSpeed: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                ),
                scale: Math.random() * 0.08 + 0.01
            });
        }
        return arr;
    }, []);

    const { viewport } = useThree();
    const target = new THREE.Vector3();

    useFrame((state) => {
        if (!meshRef.current) return;

        // Map normalized mouse to world space accurately
        target.set(
            (mouse.current.x * viewport.width) / 2,
            (mouse.current.y * viewport.height) / 2,
            0
        );

        // Sweeping global rotation (slowed down drastically)
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;

        shards.forEach((shard, i) => {
            // Apply native majestic upward drift
            shard.position.add(shard.speed);

            // Interaction physics (Force field repel away from mouse)
            const dx = shard.position.x - target.x;
            const dy = shard.position.y - target.y;
            // Lessen the effect on elements deep in the Z-axis
            const dz = shard.position.z - target.z;
            const distance = Math.sqrt(dx * dx + dy * dy + Math.pow(Math.max(0, Math.abs(dz) - 5), 2));

            if (distance < 3.5) {
                // Apply a sudden smooth repulsion force radially outward
                const force = (3.5 - distance) * 0.03;
                shard.velocity.x += (dx / distance) * force;
                shard.velocity.y += (dy / distance) * force;
                // Add an elegant dynamic spin outward on the Z axis
                shard.velocity.z += (Math.random() - 0.5) * force;
            }

            // Apply velocity physics & smooth friction damping
            shard.position.add(shard.velocity);
            shard.velocity.multiplyScalar(0.92);

            // Seamless infinite vertical wrapping
            if (shard.position.y > 10) {
                shard.position.y = -10;
                shard.position.x = (Math.random() - 0.5) * 20;
            }

            // Update rotations 
            shard.rotation.add(shard.rotSpeed);
            // Dynamic spin acceleration if actively repelled by the cursor
            const speedMag = shard.velocity.length();
            if (speedMag > 0.005) {
                shard.rotation.x += shard.velocity.y * 0.8;
                shard.rotation.y += shard.velocity.x * 0.8;
            }

            dummy.position.copy(shard.position);
            dummy.rotation.set(shard.rotation.x, shard.rotation.y, shard.rotation.z);
            dummy.scale.setScalar(shard.scale);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            {/* Tetrahedrons perfectly mimic the Assassin's Creed triangular memory fragments */}
            <tetrahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#C8FF00" transparent opacity={0.4} wireframe />
        </instancedMesh>
    );
}

function AnimusMatrix() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Majestic, vast, slow rotation of the simulation bounds
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
            groupRef.current.rotation.z = state.clock.elapsedTime * 0.005;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, -4]}>
            <mesh>
                <icosahedronGeometry args={[5, 1]} />
                <meshBasicMaterial color="#1F1F1F" wireframe transparent opacity={0.4} />
            </mesh>
            <mesh scale={1.5} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <icosahedronGeometry args={[6, 2]} />
                <meshBasicMaterial color="#111111" wireframe transparent opacity={0.25} />
            </mesh>
        </group>
    );
}

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-90 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
                {/* Deep fog fades the distant fragments smoothly into the dark Apple base */}
                <fog attach="fog" args={['#080808', 2, 14]} />
                <AnimusMatrix />
                <DigitalSand />
            </Canvas>
        </div>
    );
}
