import React, {useRef, useState} from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function sphere3d() {
  
    const sphereDirectionUp = useRef()

    const sphere = useRef()
    const cameraRef = useRef()
    const Render = () => {
        useThree(({camera}) => {
        cameraRef.current = camera
        })

        useFrame(() => {

        if(!sphereDirectionUp.current) {
            sphere.current.position.y -= 0.005
            sphere.current.position.x -= 0.01

            sphere.current.rotation.y -= 0.01
        }else {
            sphere.current.position.y += 0.005
            sphere.current.position.x += 0.01

            sphere.current.rotation.y += 0.01
        }

        if(sphere.current.position.y < -10) {
            sphereDirectionUp.current = true
        }
        if(sphere.current.position.y > 0) {
            sphereDirectionUp.current = false
        }
        })
    }

    const colorMap = useRef()
    const Loads = () => {
        colorMap.current = useTexture('lava.jpg')
        cameraRef.current.position.z = 15
        cameraRef.current.position.x = -10
        cameraRef.current.position.y = -6
        return (
        <mesh ref={sphere}>
            <sphereGeometry args={[3]} />
            <meshStandardMaterial map={colorMap.current} />
        </mesh>
        )
    }
    return (
    <div className="absolute -z-10 top-8 right-8 w-full h-full">
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
            <Loads />
            <Render />
        </Canvas>
    </div>
  )
}

export default sphere3d