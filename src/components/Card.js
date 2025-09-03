import React from 'react'

const Card = ({title,subtitle,Icon,iconBg}) => {
  return (
    <div className='p-4 rounded flex border border-border gap-4 bg-main'>
        <button className={`${iconBg} rounded-full flex-cols w-12 h-12`}>
            <Icon className={`text-white `}/>
        </button>
        <div className='flex flex-col align-center gap-2'>
            <h3>{title}</h3>
            <p className='font-bold'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Card