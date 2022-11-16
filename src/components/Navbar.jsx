import React, { useState } from 'react';
import Logo from '../icons/logo.svg';
import PopUp from '../components/Popup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {

  let [open,setOpen]=useState(false);


  const [showMyModal, setShowMyModal] = useState(false)

  const handleOnClose = () => setShowMyModal(false)

  return (
    <div className='shadow-md md:shadow-none w-full    fixed md:absolute top-0  font-redrose'>
        <div className='md:flex items-center justify-between bg-bg-gray md:bg-opacity-0 py-4 md:px-10 px-7'>
          <div className='pt-2'>
          <Link to='/'><img src={Logo} alt="icon" /></Link>
          </div>

          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

          <div className={`grid md:flex md:items-center md:pb-0 pb-12 md:gap-8 absolute md:static md:bg-opacity-0 bg-bg-gray md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' :'top-[-490px]'}`}>
            <Link to="/" className='md:ml-8 text-xl md:my-0 my-2 hover:text-text-hover '>Home</Link>
            <Link to='/place' className='hover:text-text-hover md:ml-8 text-xl md:my-0 my-2'>Place to stay</Link>
            <Link to="/" className='hover:text-text-hover md:ml-8 text-xl md:my-0 my-2'>NFTs</Link>
            <Link to="/" className='hover:text-text-hover md:ml-8 text-xl md:my-0 my-2'>Community</Link>

            <Button onClick={() => setShowMyModal(true)} className=" w-44 md:w-52 md:ml-16 md:h-10 h-10 my-4 md:block p-3 px-6 pt-2 text-text-white bg-bg-color rounded-xl baseline hover:opacity-80" >Connect Wallet</Button>
        <PopUp onClose={handleOnClose} visible={showMyModal} />
          </div>

          
          

      

      </div>
      </div>
  )
}
