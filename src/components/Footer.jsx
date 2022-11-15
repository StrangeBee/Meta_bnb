import React from 'react';
import MetaW from '../icons/MetaWhite.svg';
import Tweet from '../icons/Twitter.svg';
import Fb from '../icons/FbIcon.svg';
import Insta from '../icons/Instagram.svg';
import Copy from '../icons/Copyright.svg';

export default function Footer() {
  return (
    <section className=' bg-bg-black text-text-white'>
        <div className='container flex flex-col-reverse md:flex-row items-center  mx-auto  space-y-0 md:space-y-0 md:justify-between md:mx-10 '>      

            <div  className=' flex flex-col mb-24 space-y-12 md:w-36 md:m-12 md:mb-2 lg:m-24'>
              <img src={MetaW} alt="" />
              <div className='flex gap-8 py-6 justify-center md:pr-12 md:gap-6'>
                <img src={Tweet} alt="" />
                <img src={Insta} alt="" />
                <img src={Fb} alt="" />
              </div>
              <img src={Copy} alt="" className='pt-6 w-26'/>
            </div>

            <div className='flex gap-8 p-4  md:mb-6 lg:gap-48 lg:pb-16'>
              <div className='leading-10'>
                <h1 className='font-bold'>Community</h1>
                <ul>
                  <li>NFT</li>
                  <li>Tokens</li>
                  <li>Landlord</li>
                  <li>Discord</li>
                </ul>
              </div>
              <div className='leading-10'>
                <h1 className='font-bold'>Places</h1>
                <ul>
                  <li>Castle</li>
                  <li>Farms</li>
                  <li>Beach</li>
                  <li>Learn more</li>
                </ul>
              </div>
              <div className='leading-10'>
                <h1 className='font-bold'>About us</h1>
                <ul>
                  <li>Road map</li>
                  <li>Creators</li>
                  <li>Career</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

        </div>
      </section>
  )
}
