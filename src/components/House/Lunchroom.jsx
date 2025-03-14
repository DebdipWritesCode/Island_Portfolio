import { useTexture } from "@react-three/drei"

const Lunchroom = (props) => {
  const lunchRoomTextures = useTexture('./Textures/LunchroomBaked.jpg')

  return (
    <>
      <mesh
        geometry={props.nodes.LunchroomMerge.geometry}
        position={[0.7, 1.6, 0.4]}
      >
        <meshBasicMaterial map={lunchRoomTextures} map-flipY={false} />
      </mesh>
    </>
  )
}

export default Lunchroom