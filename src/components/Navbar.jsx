import React, { useState } from 'react';
import Logo from '../icons/logo.svg';
import PopUp from '../components/Popup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Navbar() {




  const [showMyModal, setShowMyModal] = useState(false)

  const handleOnClose = () => setShowMyModal(false)

  return (
    <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
          <img src={Logo} alt="icon" />
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className='hover:text-text-hover'>Home</a>
            <Link to='/place'>Place to stay</Link>
            <a href="/" className='hover:text-text-hover'>NFTs</a>
            <a href="/" className='hover:text-text-hover'>Community</a>
          </div>

          
          <Button onClick={() => setShowMyModal(true)} className=" hidden md:block p-3 px-6 pt-2 text-text-white bg-bg-color rounded-xl baseline hover:opacity-80" >Connect Wallet</Button>
        <PopUp onClose={handleOnClose} visible={showMyModal} />

        <Button id='menu-btn' className=' block hamburger md:hidden focus:outline-none'>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </Button>
      </div>

        <div className="md:hidden">
          <div id="menu" className=" open absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-bg-gray hidden sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <Link to="/" className='hover:text-text-hover'>Home
          </Link>
          <Link to='/place'>
            Place to stay
          </Link>
            <Link to="/" className='hover:text-text-hover'>NFTs</Link>
            <Link to="/" className='hover:text-text-hover'>Community</Link>
          </div>
        </div>
      </nav>
  )
}
