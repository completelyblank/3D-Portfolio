import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import {Island}  from 'D:/University/3D-portfolio/src/models/Island.jsx';
import { Sky } from 'D:/University/3D-portfolio/src/models/Sky.jsx';
import {Bird} from 'D:/University/3D-portfolio/src/models/Bird.jsx';
import {Plane} from 'D:/University/3D-portfolio/src/models/Plane.jsx';
/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      ~POP UP~
    </div>*/

const Home = () => 
{
  const adjustIslandForScreenSize = () =>
  {
    let screenScale=null;
    let screenPosition =[0, -6.5, -43];
    let rotation =[0.1, 47, 0];
    if (window.innerWidth < 768)
    {
      screenScale = [1, 1, 1];
    }
    else
    {
      screenPosition = [0, -6.5, -430];
    }  

    return [screenScale, screenPosition, rotation];
    
  }

  const adjustPlaneForScreenSize = () =>
  {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768)
    {
      screenScale = [1.5, 1.5, 1.5]; 
      screenPosition = [0, -1.5, 0];  

    }
    
    else 
    {
      screenScale = [3, 3, 3]; 
      screenPosition = [0, -4, -4];  
    }
    return [screenScale, screenPosition];
    
  }

  const [islandScale, islandPosition, islandRotation] =adjustIslandForScreenSize();
  const [planeScale, planePosition]   =adjustPlaneForScreenSize();

  return (
   <section className='w-full h-screen relative'>
    <Canvas className="w-full h-screen relative bg-transparent ${isRotating ? cursor-grabbing : cursor-grab}" 
      camera={{near: 0.1, far: 1000}}>
        <Suspense fallback ={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor="#62cff4" groundColor="#f2d4c2" intensity={1}/>
        <Bird />
        <Sky />
        <Island 
        position ={islandPosition}
        scale ={islandScale}
        rotation ={islandRotation}
        />
        <Plane 
          //isRotating={isRotating}
          planeScale = {planeScale}
          planePosition= {planePosition}
          rotation = {[0, 20, 0]}
        />
        </Suspense>
    </Canvas>
    </section>
  )
}

export default Home;