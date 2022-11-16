import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards2 from './Cards2';
import { Button } from 'react-bootstrap';

export default function Place() {
  return (
    <div>

        <Navbar />

        <section >
            <div className='container flex flex-col-reverse md:flex-row items-center  mx-auto  space-y-0 md:space-y-0 md:justify-between font-redrose mt-24'>

                <div className='flex  w-full pl-8 md:hidden'>
                    <Form.Select className='mx-6 p w-64 border-2 rounded-md border-bg-gray '>
                        <option>Filter</option>
                        <option value="1">Farm</option>
                        <option value="2">Restaurant</option>
                        <option value="3">Cottage</option>
                        <option value="3">Castle</option>
                        <option value="3">Fantasy</option>
                        <option value="3">Beach</option>
                        <option value="3">Cabins</option>
                        <option value="3">Off-grid</option>
                    </Form.Select>

                    <Form >
                    <div className="relative text-gray-600 focus-within:text-gray-400 ">
                    <input type="search" name="q" className="py-2 text-sm text-white  rounded-md pl-6  focus:bg-white focus:text-gray-900 lg:w-40" placeholder="Location" autocomplete="off" />
                    <span class="absolute inset-y-0 left-32 flex flex-col-reverse items-center pl-2 ">
                        <Button type="submit" className="p-1 focus:outline-none focus:shadow-outline" >
                        <ion-icon name="options"></ion-icon>
                        </Button>
                    </span>
                    </div>
                </Form>
                </div>
        
                <div className='hidden lg:flex md:flex md:gap-8 lg:gap-8 lg:justify-between md:mx-6  md:pt-1 lg:pt-2'>
                    
                    <Link to='/'>Farm</Link>
                    <Link to='/'>Restaurant</Link>
                    <Link to='/'>Cottage</Link>
                    <Link to='/'>Castle</Link>
                    <Link to='/'>Fantasy City</Link>
                    <Link to='/'>Beach</Link>
                    <Link to='/'>Cabins</Link>
                    <Link to='/'>Off-grid</Link>
                  

                 <Form >
                    <div className="relative lg:mb-5">
                    <input type="search" name="q" className="py-2 lg:py-2 text-sm text-white  rounded-md pl-6  focus:bg-white focus:text-gray-900 lg:w-40 " placeholder="Location" autocomplete="off" />
                    <span class="absolute inset-y-0 left-32 flex flex-col-reverse items-center pl-2 ">
                        <Button type="submit" className="p-1 focus:outline-none focus:shadow-outline" >
                        <ion-icon name="options"></ion-icon>
                        </Button>
                    </span>
                    </div>
                </Form>
                </div>
                
                
            </div>

           <Cards2 />
        </section>

        <Footer />
    </div>
  )
}
