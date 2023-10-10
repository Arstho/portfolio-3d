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
    <div className='h-screen snap-start md:snap-center px-2 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-center h-full gap-10'>
        <div className='flex-2 md:flex-1'>
          <ul>
            {data.map((item, i) => (
              <li key={i} onClick={() => setProject(item)} className='text-[30px] md:text-[40px] font-bold hover:text-green-500 cursor-pointer mt-3'>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-2 md:flex-1 mb-auto md:mb-0 h-[400px] md:h-full'>
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
