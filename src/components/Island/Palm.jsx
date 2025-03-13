import { useTexture } from "@react-three/drei"

const Palm = (props) => {
  const palmTexture = useTexture('./Textures/PalmBaked.jpg')

  return (
    <>
      <mesh
        geometry={props.nodes.PalmMerge.geometry}
        position={[-6.454, 0.835, 3.178]}
        rotation={[0, -0.985, 0]}
      >
        <meshBasicMaterial map={palmTexture} map-flipY={false} />
      </mesh>
    </>
  )
}

export default Palm