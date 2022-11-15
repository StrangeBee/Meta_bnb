import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';

export default function Place() {
  return (
    <div>

        <Navbar />

        <section>
            <div className='container flex flex-col-reverse md:flex-row items-center  mx-auto  space-y-0 md:space-y-0 md:justify-between '>
        
                <div className=' grid grid-cols-2 gap-12 md:flex md:gap-12 content-center md:mx-6  md:pt-1'>
                    <Link to='/'>Farm</Link>
                    <Link to='/'>Restaurant</Link>
                    <Link to='/'>Cottage</Link>
                    <Link to='/'>Castle</Link>
                    <Link to='/'>Fantasy City</Link>
                    <Link to='/'>Beach</Link>
                    <Link to='/'>Cabins</Link>
                    <Link to='/'>Off-grid</Link>
                
                </div>
                
                <Form>
                    <Form.Control type='address' placeholder='Location' className=' hidden md:block border-2 border-bg-gray rounded-xl items-center p-1  
                    pl-4 mx-4'>
                    </Form.Control>
                </Form>
            </div>

            <Cards />
            <Cards />
        </section>

        <Footer />
    </div>
  )
}
