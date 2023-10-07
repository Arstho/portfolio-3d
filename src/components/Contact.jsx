import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef()
  const [seccess, setSeccess] = useState(true)

  const handleSubmit = (e) => {
  e.preventDefault()

  }
  
  return (
    <div className='h-screen snap-center px-20'>
      <div className='flex justify-between items-center h-full gap-10'>
        <div className='flex-1 flex w-full items-center'>
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className='flex flex-col w-full gap-5'>
            <h1 className='text-2xl mb-5'>Связаться с нами</h1>
            <input
              type='text'
              placeholder='Ваше имя'
              className='p-2 rounded-sm'
            />
            <input
              type='email'
              placeholder='Ваш email'
              className='p-2 rounded-sm'
            />
            <textarea
              placeholder='Ваше сообщение'
              rows={10}
              className='p-2 rounded-sm'></textarea>
            <button type='submit' className='button'>
              Отправить
            </button>
            {seccess && 'Ваше сообщение отправлено'}
          </form>
        </div>
        <div className=''>
          {/* {<Map />} */}
          <h1>Map</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
