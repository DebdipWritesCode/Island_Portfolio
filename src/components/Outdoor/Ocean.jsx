import { useTexture } from '@react-three/drei';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { RepeatWrapping, PlaneGeometry, Vector3 } from 'three';

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

const Ocean = () => {
  // 1. Make the ref
  // 2. Import the Water Texcture
  // 3. Repeat Wrap for water Texture
  // 4. Get the gl
  // 5. useFrame for the clock
  // 6. Return the water component; water component will have the ref and args
  // 7. args will have PlaneGeometry and an object with the following properties
  //    a. textureWidth,
  //    b. textureHeight,
  //    c. waterNormals,
  //    d. sunDirection,
  //    e. sunColor,
  //    f. waterColor,
  //    g. distortionScale,
  //    h. fog,
  //    i. format
  // 8. rotation-x set to -Math.PI / 2

  const oceanRef = useRef();
  const waterNormals = useTexture('./Textures/waternormals.jpg')
  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
  const gl = useThree((state) => state.gl); 

  useFrame(({ clock }) => {
    oceanRef.current.material.uniforms.time.value = clock.getElapsedTime() * 0.5; // 0.5 is the speed of the water
  })

  return (
    <>
      <water
        ref={oceanRef}
        args={[
          new PlaneGeometry(200, 300),
          {
            textureWidth: 64,
            textureHeight: 64,
            waterNormals,
            sunDirection: new Vector3(0),
            sunColor: 0xeb8934,
            waterColor: 0x00f6682,
            distortionScale: 5,
            fog: false,
            //format: gl.encoding,
          }
        ]}
        rotation-x={-Math.PI / 2}
      />
    </>
  )
}

export default Ocean