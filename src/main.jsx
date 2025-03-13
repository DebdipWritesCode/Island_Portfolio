import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

const isMobile = () => {
  return ((window.innerWidth <= 1000) && (window.innerHeight <= 800))
}

const fovForPC = 45
const fovForMobile = 100

createRoot(document.getElementById('root')).render(
  <Canvas camera={{
    fov: isMobile() ? fovForMobile : fovForPC,
    position: [57, 7, 12],
    near: 0.1,
    far: 200,
  }}>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </Canvas>
)
