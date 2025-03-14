import { useMemo, useRef } from "react"
import fragmentShader from "../../shaders/tab/fragment.glsl"
import vertexShader from "../../shaders/tab/vertex.glsl"
import { Uniform } from "three"
import { useFrame } from "@react-three/fiber"

const ShaderTab = () => {
  const planeRef = useRef()

  const tabShaderMaterial = useMemo(() => ({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: new Uniform(0),
    }
  }))

  useFrame(({ clock }) => {
    planeRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  })

  return (
    <>
      <mesh ref={planeRef} position={[0.1, 5.16, -2.4]}>
        <planeGeometry args={[1.13, 0.4]} />
        <shaderMaterial attach="material" args={[tabShaderMaterial]} />
      </mesh>
    </>
  )
}

export default ShaderTab