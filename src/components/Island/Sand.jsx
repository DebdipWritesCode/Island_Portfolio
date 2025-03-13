import { useTexture } from "@react-three/drei"

const Sand = (props) => {
  // 1. Import the texture
  // 2. Add the mesh
  // 3. Add the mesh material and texture into it

  const sandTexture = useTexture('./Textures/IslandBaked.jpg')

  return (
    <>
      <mesh 
        geometry={props.nodes.IslandMerge.geometry}
        position={[0, -0.146, 0]}
      >
        <meshBasicMaterial map={sandTexture} map-flipY={false} />
      </mesh>
    </>
  )
}

export default Sand