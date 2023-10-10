import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Rocket from './Rocket'

const Illustration = () => {
  return (
    <Canvas>
      <Stage shadows='none' environment='city' intensity={0.6}>
        <Rocket />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Illustration
