import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Wdesign from './Wdesign'

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage shadows='none' environment='city' intensity={0.6}>
          <Wdesign />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  )
}

export default WebDesign
