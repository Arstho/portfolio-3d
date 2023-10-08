import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Hero = () => {
  return (
    <div className='h-screen snap-center px-20'>
      <Navbar />
      <div className='flex justify-between items-center pt-10 fap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[56px] font-bold'>
            Думай. <br /> Создавай. <br /> Решай.
          </h1>
          <div className='flex items-center gap-2'>
            <img src='./img/line.png' alt='line-img' className='h-7' />
            <h2 className='text-2xl text-green-500'>Что мы делаем</h2>
          </div>
          <p className='text-xl'>
            нам нравиться создовать восхитительные цифровые <br /> продукты,
            ориентированные на человека.
          </p>
          <button className='button w-max'>Узнать больше</button>
        </div>
        <div className='flex-1 h-[500px] relative'>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={10} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color='#0f104e'
                attach='material'
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src='./img/robot.png'
            alt='robot-img'
            className='h-[500px] m-auto absolute top-0 bottom-0 right-0 left-0 animate'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
