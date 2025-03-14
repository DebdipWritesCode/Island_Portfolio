import fragmentShader from '../../shaders/smoke/fragment.glsl'
import vertexShader from '../../shaders/smoke/vertex.glsl'
import { useMemo, useRef } from "react"
import { DoubleSide, RepeatWrapping, Uniform } from "three"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const ShaderSmoke = () => {
  const planeRef = useRef()

  const noiseTexture = useTexture("./Textures/noiseTexture.png")

  noiseTexture.wrapS = noiseTexture.wrapT = RepeatWrapping

  const smokeShaderMaterial = useMemo(() => ({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: new Uniform(0), // Time is a float value that represents the time in seconds
      uPerlinTexture: new Uniform(noiseTexture), // Perlin Noise means that the noise is smooth and continuous
    }
  }))

  useFrame(({ clock }) => {
    planeRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  })

  return (
    <>
      <mesh
        position={[2.43, 2.76, 1]}
        ref={planeRef}
      >
        <planeGeometry args={[0.1, 0.25]} />
        <shaderMaterial
          attach="material"
          args={[smokeShaderMaterial]}
          transparent
          side={DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

export default ShaderSmoke