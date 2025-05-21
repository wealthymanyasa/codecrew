import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

// Animated floating particles
const Particles = ({ count = 100, color = '#8b5cf6' }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, size } = useThree();
  
  // Generate random positions for particles
  useEffect(() => {
    if (!mesh.current) return;
    
    const tempObject = new THREE.Object3D();
    const dummy = new THREE.Object3D();
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 1.5;
      const y = (Math.random() - 0.5) * viewport.height * 1.5;
      const z = (Math.random() - 0.5) * 5;
      const scale = Math.random() * 0.3 + 0.1;
      
      dummy.position.set(x, y, z);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count, viewport]);
  
  // Animate particles
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    const dummy = new THREE.Object3D();
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const tempPosition = new THREE.Vector3();
      mesh.current.getMatrixAt(i, dummy.matrix);
      dummy.matrix.decompose(tempPosition, dummy.quaternion, dummy.scale);
      
      // Create a wave-like motion
      const x = tempPosition.x;
      const y = tempPosition.y + Math.sin(elapsedTime * 0.2 + i * 0.1) * 0.05;
      const z = tempPosition.z;
      
      dummy.position.set(x, y, z);
      dummy.rotation.x = elapsedTime * 0.2;
      dummy.rotation.y = elapsedTime * 0.1;
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
};

// Animated blob shape
const AnimatedBlob = ({ color = '#8b5cf6', position = [0, 0, 0], scale = 1.5 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.y = elapsedTime * 0.1;
    meshRef.current.rotation.z = elapsedTime * 0.05;
  });
  
  return (
    <Sphere args={[scale, 128, 128]} position={position as [number, number, number]}>
      <MeshDistortMaterial 
        color={color}
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.2}
        metalness={0.1}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

// Main Background Component
const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        
        {/* Primary blob */}
        <AnimatedBlob position={[-3, -1, -2]} color="#8b5cf6" scale={2} />
        
        {/* Secondary blobs */}
        <AnimatedBlob position={[3, 1, -3]} color="#0ea5e9" scale={1.5} />
        <AnimatedBlob position={[0, -2, -4]} color="#d946ef" scale={1.2} />
        
        {/* Floating particles */}
        <Particles count={150} color="#8b5cf6" />
        
        {/* Optional controls for development - remove for production */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
};

export default HeroBackground;
