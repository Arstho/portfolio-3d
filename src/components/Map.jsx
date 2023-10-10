import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'

const Map = () => {
  return (
    <Canvas>
      <Stage shadows='none' environment='city' intensity={0.6}>
        <Earth />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  )
}

export default Map
