import { Sky, useGLTF, Float, ScrollControls, Text } from "@react-three/drei"

import "./App.css"
import Ocean from "./components/Outdoor/Ocean"
import CameraScroll from "./components/Outdoor/CameraScroll"
import Scene from "./components/Outdoor/Scene"

const App = () => {
  const { nodes } = useGLTF("./Model/House.glb")

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <Ocean />
      <Sky sunPosition={[1, 0.1, 10]} />

      <Float rotationIntensity={0.9}>
        <Text
          font="./fonts/font.ttf"
          position-y={15}
          rotation-y={0.48 * Math.PI}
          curveRadius={-50}
          fontSize={5}
        >
          Debdip's World
        </Text>
      </Float>

      <Scene nodes={nodes} />

      <ScrollControls pages={25} damping={0.2}>
        <CameraScroll nodes={nodes} />
      </ScrollControls>
    </>
  )
}

export default App

useGLTF.preload('./Model/House.glb')