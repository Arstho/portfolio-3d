import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const WhoWeAre = () => {
  return (
    <div className='h-[150vh] md:h-screen snap-center md:snap-center px-2 md:px-20 text-center md:text-left'>
      <div className='flex flex-col md:flex-row justify-between items-center h-full gap-10'>
        <div className='flex-2 md:flex-1 h-[500px]'>
          <Canvas camera={{ fov: 15, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[40px] font-bold'>
            Думай за пределами <br /> квадратного пространства
          </h1>
          <div className='flex items-center gap-2 mx-auto md:mx-0'>
            <img src='./img/line.png' alt='line-img' className='h-7' />
            <h2 className='text-xl md:text-2xl text-green-500'>Кто мы такие</h2>
          </div>
          <p className='text-lg md:text-xl'>
            творческая группа дизайнеров и разработчиков со страстью к искусству
          </p>
          <button className='button w-max mx-auto md:mx-0'>Наши проекты</button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
