import { useState } from 'react'
import WebDesign from './WebDesign'
import Development from './Development'
import Illustration from './Illustration'
import ProductDesign from './ProductDesign'
import SocialMedia from './SocialMedia'

const data = [
  'Веб-дизайн',
  'Разработка',
  'Иллюстрация',
  'Дизайн продукта',
  'Социальные медий',
]

const Projects = () => {
  const [project, setProject] = useState('Веб-дизайн')

  return (
    <div className='h-screen snap-center px-20'>
      <div className='flex justify-between items-center h-full gap-10'>
        <div className='flex-1'>
          <ul>
            {data.map((item, i) => (
              <li key={i} onClick={() => setProject(item)} className='text-[40px] font-bold hover:text-green-500 cursor-pointer mt-3'>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 h-full'>
          {project === 'Веб-дизайн' ? (
            <WebDesign />
          ) : project === 'Разработка' ? (
            <Development />
          ) : project === 'Иллюстрация' ? (
            <Illustration />
          ) : project === 'Дизайн продукта' ? (
            <ProductDesign />
          ) : (
            <SocialMedia />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
