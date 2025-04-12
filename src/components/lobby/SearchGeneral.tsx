'use client';

import Search from './Search';

const SearchGeneral = () => {
  return (
    <div className='w-full max-w-7xl mx-auto rounded-4xl bg-white px-10 py-5 flex flex-col justify-between items-center'>
      <span className='font-semibold text-2xl text-black'>
        ¿Qué necesita tu mascota hoy?
      </span>
        <div className='w-full justify-between items-center gap-5'>
            <Search />
        </div>
    </div>
  )
}

export default SearchGeneral
