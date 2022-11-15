import React from 'react';
import Button from 'react-bootstrap/Button';
import Cancel from '../icons/Cancel.svg';
import MetaH from '../icons/MetaHead.svg'
import ArrowR from '../icons/ArrowRight.svg';
import WalletC from '../icons/WalletConnect.svg';
import Line from '../icons/Line.svg';

export default function Popup({visible, onClose}) {
    const handleOnClose = (e) => {
        if (e.target.id === 'pop') onClose();
    };

    if (!visible) return '';

  return (
    <section>
        <div  id='pop' onClick={handleOnClose} className='fixed inset-0 bg-bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  '>
           <div className=' bg-bg-gray p-6 rounded-xl'>
                <div className='flex justify-between p-4'>
                <h1 className=' font-bold'>
                    Connect Wallet
                </h1>
                <Button onClick={onClose}><img src={Cancel} alt="" /></Button>
                </div>
                <img src={Line} alt="" className='justify-center md:justify-center'/>
                <div>
                    <p className='p-4'>
                    Choose your preferred wallet:
                    </p>
                    <Button className=' border-2 border-bg-gray rounded-xl flex space-between justify-between items-center w-full p-2'> 
                    <img src={MetaH} alt="" />
                    <h1 className=' font-bold pr-14'>Metamask</h1>
                    <img src={ArrowR} alt="" className='pl-60'/>
                </Button>
                <br />
                <Button className=' border-2 border-bg-gray rounded-xl flex space-between justify-between items-center w-full p-2'> 
                    <img src={WalletC} alt="" />
                    <h1 className=' font-bold pr-6'>WalletConnect</h1>
                    <img src={ArrowR} alt="" className='pl-60'/>
                </Button>
                </div>
                
           </div> 

           
           
        </div>
    </section>
  )
}
