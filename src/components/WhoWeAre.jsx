const WhoWeAre = () => {
  return (
    <div className='h-screen snap-center px-20'>
      <div className='flex justify-between items-center h-full gap-10'>
        <div className='flex-1 h-[500px]'>
          <h1>3d object</h1>
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[40px] font-bold'>Думай за пределами квадратного пространства</h1>
          <div className='flex items-center gap-2'>
            <img src='./img/line.png' alt='line-img' className='h-7' />
            <h2 className='text-2xl text-green-500'>Кто мы такие</h2>
          </div>
          <p className='text-xl'>
            творческая группа дизайнеров и разработчиков со страстью к искусству
          </p>
          <button className='button w-max'>Наши проекты</button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
