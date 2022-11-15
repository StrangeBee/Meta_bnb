import React from 'react';
import BlueR from '../icons/Blueroof.svg';
import Rating from '../icons/Rating.svg';

function Cards() {
  return (
    <section>

      <div id='card' className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-around mx-20'>

        <div className='border-2 border-card-border rounded-lg w-80  my-10  lg:mx-2'>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-1 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2 '>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2'>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2 '>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>
        
      </div>
      <div id='card' className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-around mx-20'>

        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2 '>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-1 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2 '>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2'>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg w-80 my-10 lg:mx-2 '>
          <div className='px-5 py-4'>
          <img src={BlueR } alt="" />
             <div>
                <p className=' text-xs py-1'>Desert king <span className='pl-28 lg:pl-16 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1'>2345km away <span className=' pl-14 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='py-1'/>
          </div>
        </div>
        
      </div>
  </section>
  )
}

export default Cards
