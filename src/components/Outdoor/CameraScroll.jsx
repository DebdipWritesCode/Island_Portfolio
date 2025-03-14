import { useScroll, useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

const CameraScroll = (props) => {
  const DoorTexture = useTexture('./Textures/DoorBaked.jpg');

  const camera = useThree((state) => state.camera);

  const doorRef = useRef();

  const tlRef = useRef();

  const [progress, setProgress] = useState(1);
  const [opacity, setOpacity] = useState(0);

  const scroll = useScroll();  // scroll is a hook that returns the scroll position of the page as a value between 0 and 1

  useFrame((state, delta) => {
    tlRef.current.seek(scroll.offset * tlRef.current.duration()); // tlRef.current.duration() is the total duration of the timeline and seek is used to go to a specific time in the timeline
  })

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline()

    tlRef.current.to(
      camera.position,
      {

        duration: 2,
        x: 7.7,
        y: 3,
        z: -2.5,

      },
    )
    tlRef.current.to(
      camera.rotation,
      {
        x: 0,
        y: Math.PI / 2,
        z: 0,

      }, "<60%"
    )
  }, [])

  return (
    <>
      <group
        ref={doorRef}
        position={[3.976, 1.618, -1.95]}
      >
        <mesh
          geometry={props.nodes.DoorMerge.geometry}
        >
          <meshBasicMaterial map={DoorTexture} map-flipY={false} />
        </mesh>
      </group>
    </>
  )
}

export default CameraScroll