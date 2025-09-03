import React from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message, Select } from '../UsedInputs'
import {actorsData} from '../../data/actorsData'
import  Rating  from '../Rating'
const MovieRates = ({movie}) => {
  const Ratings = [
    {
      title:"0 - Poor",
      value:0
    },
    {
      title:"1 - Fair",
      value:1
    },
    {
      title:"2 - Good",
      value:2
    },
    {
      title:"3 - Very Good",
      value:3
    },
    {
      title:"4 - Excellent",
      value:4
    },{
      title:"5 - Masterpiece",
      value:5
    }
  ]
  const [rating,setRating] = React.useState()
  return (
    <div className='my-12'>
        <Titles title="Write A Review" Icon={BsBookmarkStarFill}/>
        <div className='mt-10 xl:grid flex-cols grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
          {/* write reviews */}
          <div className='xl:col-span-2 w-full flex flex-col gap-8'>
            <h3 className='text-xl text-text font-semibold'>Review "{movie?.name}" </h3>
            <p className='text-sm leading-7 font-medium text-border'>
              Write a review for movie. IT will be posted this page.lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='w-full text-sm'>
              <Select label="Select Rating" options={Ratings} onChange={(e)=>setRating(e.target.value)}/>
              <div className='flex mt-4 text-lg gap-2 text-star'>
                <Rating value={rating}/>
              </div>
            </div>
            {/* messages */}
            <Message label="Message" placeholder="Make it short and sweet.."/>
            <button className="w-full flex-cols bg-subMain transitions text-white rounded font-medium py-3">Submit Review</button>
          </div>
          {/* reviews */}
          <div className='col-span-3 flex flex-col gap-6'>
            <h3 className='text-xl text-text font-semibold'>Reviews {56}</h3>
            <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-auto'>
              {
                actorsData.map((user,i)=>(
                  <div key={i} className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 text-center md:text-start'>
                    <div className='col-span-2 bg-main hidden md:block'>
                      <img src={`/images/actors/${user.img}`} alt={user.name} className='w-full h-24 rounded object-cover'/>
                    </div>
                    <div className='col-span-7 flex flex-col gap-2'>
                      <h2 className=''>{user.name}</h2>
                      <p className='text-xs text-text leading-6 '>{user.message}</p>
                    </div>
                    {/* rates */}
                    <div className='col-span-3 flex flex-rows border-0 md:border-l border-border text-xs gap-1 text-star'>
                      <Rating value={user.rate}/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieRates