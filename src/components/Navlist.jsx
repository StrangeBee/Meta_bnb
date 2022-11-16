import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cancel from '../icons/Cancel.svg';

export default function NavList({visible, onClose}) {
    const handleNavClose = (e) => {
        if (e.target.id === 'pop') onClose();
    };

    if (!visible) return '';


  return (
     <div className="md:hidden" id='nav' onClick={handleNavClose}>
        <Button onClick={onClose}><img src={Cancel} alt="" /></Button>
          <div id="menu" className=" open absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-bg-color hidden sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <Link to="/" className='hover:text-text-hover'>Home
          </Link>
          <Link to='/place'>
            Place to stay
          </Link>
            <Link to="/" className='hover:text-text-hover'>NFTs</Link>
            <Link to="/" className='hover:text-text-hover'>Community</Link>
          </div>
        </div>
  )
}
