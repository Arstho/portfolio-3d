const Navbar = () => {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='flex items-center gap-5'>
          <img src='./img/logo.png' alt='logo' />
          <ul className='flex gap-5'>
            <li className='hover:text-green-500 cursor-pointer'>Главная</li>
            <li className='hover:text-green-500 cursor-pointer'>Студио</li>
            <li className='hover:text-green-500 cursor-pointer'>Проекты</li>
            <li className='hover:text-green-500 cursor-pointer'>Контакты</li>
          </ul>
        </div>
        <div className='flex items-center gap-5'>
          <img src='./img/search.png' alt='search-img' />
          <button className='button'>Нанять</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
