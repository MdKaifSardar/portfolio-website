import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei';



const Aeroplane = ({isRotatingBtn, isRotating, ...props}) => {
  const planeRef = useRef();
  const {scene, animations} = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);
  // planeRef.current.z = 10px;
  useEffect(() => {
    if(isRotating || isRotatingBtn){
      actions["Take 001"].play();
    }
    else{
      actions["Take 001"].stop();
    }
  }, [actions, isRotating, isRotatingBtn])
  return (
    <mesh {...props} ref={planeRef}>
      <primitive
        object={scene}
      />
    </mesh>
  )
}

export default Aeroplane
