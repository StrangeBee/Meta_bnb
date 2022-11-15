import React from 'react';
import Button from 'react-bootstrap/Button';
import LM from '../icons/LmImage1.svg';

export default function LearnMore() {
  return (
    <section className='bg-bg-color'>
        <div className='container flex flex-col-reverse md:flex-row items-center md:p-6 py-6 mx-auto  space-y-0 md:space-y-0 '>

          <div className='flex flex-col mb-24 space-y-12 md:w-1/2 text-text-white'>
            <h1 className='max-w-md text-4xl font-bold text-center  md:text-left '>Metabnb NFTs
            </h1>
            <p className='max-w-sm text-center md:text-left'>
            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services
            </p>
            <div className='flex justify-center md:justify-start'>
              <Button className='p-1 px-6 pt-1 text-bg-color bg-card-border rounded-lg baseline hover:opacity-80'>
                Learn More
              </Button>
            </div>

          </div>

          <div className='md:w-1/2'>
          <img src={LM} alt="icon" />
          </div>

        </div>
      </section>
  )
}
