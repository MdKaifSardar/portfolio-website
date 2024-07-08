import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb';

export function Sky ({isRotating, isRotatingBtn}){
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    
    useFrame((_, delta) => {
      if((isRotating || isRotatingBtn) && skyRef.current){
        skyRef.current.rotation.y += 0.1*delta; 
      }

      if (!sky.scene) {
        console.log("not loading sky"); // Return null if the scene is not loaded
      }
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}
