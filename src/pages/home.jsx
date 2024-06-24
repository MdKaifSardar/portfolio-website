import React, { useState } from 'react';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import Loader from '../components/loader';
import Island from '../models/island';
import Bird from '../models/bird';
import Aeroplane from '../models/areoplane';
import { Sky } from '../models/sky';
import Homeinfo from '../components/homeinfo';


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);


    const adjustIslandForAllScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9];
        }
        else{
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }
    const adjustPlaneForAllScreenSize = () => {
        let screenScale, screenPosition;

        if(window.innerWidth < 768){
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else{
            screenScale = [5, 5, 5];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }


    const [planeScale, planePosition] = adjustPlaneForAllScreenSize();
    const [islandScale, islandPosition, islandRotation] = adjustIslandForAllScreenSize();
  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center z-1'>
            {currentStage && <Homeinfo currentStage={currentStage}/>}
        </div>

        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing': 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <hemisphereLight
                    skyColor='#b1e1ff'
                    groundColor='#000000'
                    intensity={1}
                />

                <Bird/>
                <Sky isRotating={isRotating}/>
                <Island 
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Aeroplane 
                    isRotating={isRotating}
                    scale={planeScale}
                    position={planePosition}
                    rotation={[0, 20 , 0]}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home
