import { useScroll, useTexture, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

const CameraScroll = (props) => {
  const DoorTexture = useTexture('./Textures/DoorBaked.jpg');

  const camera = useThree((state) => state.camera);

  const doorRef = useRef();

  const tlRef = useRef();

  const reactTextRef = useRef();
  const symfonyTextRef = useRef();
  const threejsTextRef = useRef();
  const blenderTextRef = useRef();

  const pythonTeextRef = useRef();
  const htmlTextRef = useRef();
  const cssTextRef = useRef();
  const javascriptTextRef = useRef();

  const [progress, setProgress] = useState(1);
  const [opacity, setOpacity] = useState(0);

  const scroll = useScroll();  // scroll is a hook that returns the scroll position of the page as a value between 0 and 1

  useFrame((state, delta) => {
    tlRef.current.seek(scroll.offset * tlRef.current.duration()); // tlRef.current.duration() is the total duration of the timeline and seek is used to go to a specific time in the timeline
  })

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline()

    // GO TO DOOR
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

    // OPEN DOOR
    tlRef.current.to(
      doorRef.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 2,
      }
    )

    // GO INSIDE
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 3.4,
      }
    )

    //GO TO REACT MUG
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 2.3,
        y: 2.6,
        z: 0.3,
      },
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI,
        z: 0,

      }, "<"  // "<" means that the animation will start before the previous animation ends and it will start at the beginning of the previous animation
    )
    tlRef.current.to(
      reactTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"  // "<" means that the animation will start before the previous animation ends and 40% is the time at which the animation will start
    )

    // GO TO THREEJS MUG
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 3.3,
        y: 3.6,
        z: 2.3,
      }
    )
    tlRef.current.to(
      symfonyTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )
    tlRef.current.to(
      threejsTextRef.current.material,
      {
        opacity: 1,
      }, "<"
    )

    // GO TO BLENDER MUG
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 1.8,
        y: 2.75,
        z: 2.4,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: 3 * Math.PI / 4,
        z: 0,
      }, "<"
    )
    tlRef.current.to(
      blenderTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )

    //GO IN BATHROOM
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 0,
        y: 3,
        z: 1.3,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI / 2,
        z: 0,

      }, "<"
    )

    // GO TO PYTHON SOAP
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: -1.38,
        y: 3,
        z: 0.8,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI / 6,
        z: 0,
      }, "<"
    )
    tlRef.current.to(
      pythonTeextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )

    // GO TO HTML SOAP
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: -3.3,
        y: 2.5,
        z: 1,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI / 4,
        z: 0,
      }, "<"
    )
    tlRef.current.to(
      htmlTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )

    //GO TO CSS SOAP
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: -3,
        y: 2.5,
        z: 2.3,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI / 2,
        z: 0,

      }, "<"
    )
    tlRef.current.to(
      cssTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )

    //GO TO JS SOAP
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: -2.4,
        y: 2.5,
        z: 3,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: 5 * Math.PI / 6,
        z: 0,

      }, "<"
    )
    tlRef.current.to(
      javascriptTextRef.current.material,
      {
        opacity: 1,
      }, "<40%"
    )

    //EXIT BATHROOM
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: -1.8,
        y: 3,
        z: 1.1,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: 3 * Math.PI / 2,
        z: 0,

      }, "<"
    )
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        x: 0.5,
        y: 3,
        z: 1.1,
      }
    )
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI * 2,
        z: 0,

      }, "<"
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

      <Text
        ref={reactTextRef}
        font="./fonts/Bangers.ttf"
        position={[2.2, 2.7, 1]}
        fontSize={0.1}
        rotation-y={Math.PI}
        color="#2d1d04"
        material-opacity={0}
      >
        REACT
      </Text>

      <Text
        ref={threejsTextRef}
        font="./fonts/Bangers.ttf"
        position={[2.8, 3.3, 3.3]}
        fontSize={0.1}
        rotation-y={Math.PI}
        color="#2d1d04"
        material-opacity={0}
      >
        ThreeJS
      </Text>

      <Text
        ref={symfonyTextRef}
        font="./fonts/Bangers.ttf"
        position={[3.5, 3.85, 3.3]}
        fontSize={0.1}
        rotation-y={Math.PI}
        color="#2d1d04"
        material-opacity={0}
      >
        Symfony
      </Text>

      <Text
        ref={blenderTextRef}
        font="./fonts/Bangers.ttf"
        position={[1.5, 2.85, 2.7]}
        fontSize={0.1}
        rotation-y={3 * Math.PI / 4}
        color="#2d1d04"
        material-opacity={0}
      >
        Blender
      </Text>

      <Text
        ref={pythonTeextRef}
        font="./fonts/Bangers.ttf"
        position={[-1.6, 3.1, 0.1]}
        fontSize={0.1}
        rotation-y={Math.PI / 6}
        color="#2d1d04"
        material-opacity={0}
      >
        Python
      </Text>

      <Text
        ref={htmlTextRef}
        font="./fonts/Bangers.ttf"
        position={[-3.7, 2.5, 0.5]}
        fontSize={0.1}
        rotation-y={Math.PI / 2}
        color="#2d1d04"
        material-opacity={0}
      >
        HTML
      </Text>

      <Text
        ref={cssTextRef}
        font="./fonts/Bangers.ttf"
        position={[-3.7, 2.6, 2.15]}
        fontSize={0.1}
        rotation-y={Math.PI / 2}
        color="#2d1d04"
        material-opacity={0}
      >
        CSS
      </Text>

      <Text
        ref={javascriptTextRef}
        font="./fonts/Bangers.ttf"
        position={[-2.9, 2.5, 3.4]}
        fontSize={0.1}
        rotation-y={2 * Math.PI / 3}
        color="#2d1d04"
        material-opacity={0}
      >
        JavaScript
      </Text>
    </>
  )
}

export default CameraScroll