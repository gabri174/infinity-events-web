'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, TorusKnot } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingTorus() {
  return (
    <TorusKnot
      args={[1, 0.3, 100, 16]}
      scale={[1.5, 1.5, 1.5]}
    >
      <meshStandardMaterial
        color="#a855f7"
        emissive="#a855f7"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </TorusKnot>
  );
}

function Scene() {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
      <FloatingTorus />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-brand-purple">INFINITY</span>
            <span className="text-brand-cyan"> SOUND</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 tracking-wider"
          >
            Producción de eventos & conciertos
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
