import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import HeroIcon from '../img/hero.svg';
import Button from 'react-bootstrap/Button';

export default function Hero() {
  return (
    <section>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 font-redrose pt-16 md:pt-16'>

          <div className='flex flex-col mb-24 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center  md:text-left'>Rent a <span className=' text-bg-color'>Place</span> away from <br /> <span className='text-bg-color'>Home</span> in the <span className='text-bg-color'>Metaverse</span>
            </h1>
            <p className='max-w-sm text-center md:text-left'>
              we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn <br /> your imagination to reality at your comfort zone
            </p>
            <div className='flex justify-center md:justify-start'>
            <InputGroup className='border-solid rounded-l-lg border border-bg-gray w-full md:w-80 lg:w-96 justify-center'>
              <Form.Control
                placeholder="Search for location"
                aria-label="Search for location"
                className=' outline outline-offset-2 outline-2 outline-bg-gray w-3/5 p-1'
              />
              <Button className=' text-text-white bg-bg-color rounded-r baseline hover:opacity-80 w-2/5 p-2'>
                Search
              </Button>
            </InputGroup>
            </div>

          </div>

          <div className='md:w-1/2'>
          <img src={HeroIcon} alt="icon" />
          </div>

        </div>
      </section>
  )
}
