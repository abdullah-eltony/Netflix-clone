import React from 'react'
import {FiUser} from 'react-icons/fi'
const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-medium leading-loose xl:leading-relaxed text-white font-sans'>
            Download Your Movies & watch Offline <br/> Engoy on Your Mobile
          </h1>
          <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
            lorem ispum dolor amet aconsdf , constuer adipu elit nuj se
          </p>
          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex cols bg-black text-subMain px-6 py-3 rouded font-bold'>
              HK 4K
            </div>
            <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
              <FiUser/>2K
            </div>
          </div>
        </div>
        <div className=''>
          <img src='/images/mobile.png' alt='mobile app' className='w-full object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default Promos