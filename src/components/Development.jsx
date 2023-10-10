import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ReactLogo from './ReactLogo'

const Development = () => {
  return (
    <Canvas>
      <Stage shadows='none' environment='city' intensity={0.6}>
        <ReactLogo />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development
