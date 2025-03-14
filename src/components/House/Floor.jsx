import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"

const Floor = (props) => {
  const floorTextures = useTexture('./Textures/HDFloorBaked.jpg')

  return <>
    <mesh
      geometry={props.nodes.FloorMerge.geometry}
      position={[0, 1, 0]}
    >
      <meshBasicMaterial map={floorTextures} map-flipY={false} side={DoubleSide} />
    </mesh>
  </>
}

export default Floor