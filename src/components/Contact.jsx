import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef()
  const [seccess, setSeccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qufo6eo',
        'template_orwxxc1',
        ref.current,
        '6tHnhNHvj4LWS4d2W'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSeccess(true)
        },
        (error) => {
          console.log(error.text)
          setSeccess(false)
        }
      )
  }

  return (
    <div className='h-screen snap-center px-20'>
      <div className='flex justify-between items-center h-full gap-10'>
        <div className='flex-1 flex items-center'>
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className='flex flex-col w-full gap-5'>
            <h1 className='text-2xl mb-5'>Связаться с нами</h1>
            <input
              type='text'
              placeholder='Ваше имя'
              className='p-2 rounded-sm text-gray-500'
              name='name'
            />
            <input
              type='email'
              placeholder='Ваш email'
              className='p-2 rounded-sm text-gray-500'
              name='email'
            />
            <textarea
              placeholder='Ваше сообщение'
              rows={10}
              className='p-2 rounded-sm text-gray-500'
              name='message'
            />
            <button type='submit' className='button'>
              Отправить
            </button>
            {seccess && 'Ваше сообщение отправлено'}
          </form>
        </div>
        <div className='flex-1 h-full'>
          {/* {<Map />} */}
          <h1>Map</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
