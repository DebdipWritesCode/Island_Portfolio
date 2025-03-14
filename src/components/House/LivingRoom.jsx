import { useTexture } from "@react-three/drei"

const LivingRoom = (props) => {
  const livingRoomTexture = useTexture('./Textures/LivingroomBaked2.jpg')

  return (
    <>
      <mesh
        geometry={props.nodes.LivingroomMerge.geometry}
        position={[0.24, 1.89, -1.4]}
      >
        <meshBasicMaterial map={livingRoomTexture} map-flipY={false} />
      </mesh>
    </>
  )
}

export default LivingRoom