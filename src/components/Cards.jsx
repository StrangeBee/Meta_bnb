import React from 'react';
import Ad1 from '../img/Ad1.svg';
import Ad2 from '../img/Ad2.svg';
import Ad3 from '../img/Ad3.svg';
import Ad4 from '../img/Ad4.svg';
import Ad5 from '../img/Ad5.svg';
import Ad6 from '../img/Ad6.svg';
import Ad7 from '../img/Ad7.svg';
import Ad8 from '../img/Ad8.svg';
import Rating from '../icons/Rating.svg';

function Cards() {
  return (
    <section className='font-redrose'>

      <div id='card' className='container flex flex-col md:flex-row items-center  mx-auto my-6 space-y-0 md:space-y-0 lg:gap-0 gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 '>

        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2 '>
          <div className='my-4'>
          <img src={Ad1} alt="" className=' px-4 lg:px-6 ' />
             <div className='mx-4 md:px-2 lg:w-80'>
                <p className=' text-xs lg:mr-6'>Desert king <span className='pl-32 lg:pl-6 lg:pt-6 font-semibold md:pl-16'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight '>2345km away <span className=' pl-20 lg:pl-1  text md:pl-2 '>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4 md:mx-6 lg:pl-2'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2 '>
          <div className='my-4'>
          <img src={Ad2} alt="" className=' px-4 lg:px-6 ' />
             <div className='mx-4 md:px-2 lg:w-60'>
                <p className=' text-xs lg:mr-6'>Desert king <span className='pl-32 lg:pl-6 lg:pt-6 font-semibold md:pl-16'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight '>2345km away <span className=' pl-20 lg:pl-1  text md:pl-2 '>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4 md:mx-6 lg:pl-2'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2 '>
          <div className='my-4'>
          <img src={Ad3} alt="" className=' px-4 lg:px-6 ' />
             <div className='mx-4 md:px-2 lg:w-60'>
                <p className=' text-xs lg:mr-6'>Desert king <span className='pl-32 lg:pl-6 lg:pt-6 font-semibold md:pl-16'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight '>2345km away <span className=' pl-20 lg:pl-1  text md:pl-2 '>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4 md:mx-6 lg:pl-2'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2 '>
          <div className='my-4'>
          <img src={Ad4} alt="" className=' px-4 lg:px-6 ' />
             <div className='mx-4 md:px-2 lg:w-60'>
                <p className=' text-xs lg:mr-6'>Desert king <span className='pl-32 lg:pl-6 lg:pt-6 font-semibold md:pl-16'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight '>2345km away <span className=' pl-20 lg:pl-1  text md:pl-2 '>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4 md:mx-6 lg:pl-2'/>
          </div>
        </div>
        
      </div>


      <div id='card' className='container flex flex-col md:flex-row items-center  mx-auto my-6 space-y-0 md:space-y-0 lg:gap-0 gap-6 md:grid md:grid-cols-2 lg:flex '>

        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2'>
          <div className='my-4'>
          <img src={Ad5 } alt="" className=' px-4'/>
             <div className='mx-4'>
                <p className=' text-xs '>Desert king <span className='pl-24 lg:pl-14 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight'>2345km away <span className=' pl-10 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2'>
          <div className='my-4'>
          <img src={Ad6 } alt="" className=' px-4'/>
             <div className='mx-4'>
                <p className=' text-xs '>Desert king <span className='pl-24 lg:pl-14 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight'>2345km away <span className=' pl-10 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2'>
          <div className='my-4'>
          <img src={Ad7 } alt="" className=' px-4'/>
             <div className='mx-4'>
                <p className=' text-xs '>Desert king <span className='pl-24 lg:pl-14 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1 lg:tracking-tight'>2345km away <span className=' pl-10 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4'/>
          </div>
        </div>


        <div className='border-2 border-card-border rounded-lg  md:mx-11 lg:mx-2'>
          <div className='my-4'>
          <img src={Ad8 } alt="" className=' px-4 lg:'/>
             <div className='mx-4 '>
                <p className=' text-xs '>Desert king <span className='pl-24 lg:pl-12 font-semibold'>1MBT per night</span></p>
                <p className=' text-xs py-1 md:tracking-tight'>2345km away <span className=' pl-8 lg:pl-2 text'>available for 2weeks stay</span></p>
              </div>
            <img src={Rating} alt="" className='mx-4'/>
          </div>
        </div>
        
      </div>
  </section>
  )
}

export default Cards
