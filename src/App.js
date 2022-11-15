import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import MBT from './icons/MBToken.svg';
import META from './icons/Meta.svg';
import OpenS from './icons/OpenSea.svg';
import Card from './components/Cards.jsx';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <div className='m-1'>
        <NavBar />

        <Hero />
      </div>

      <section className=' md:pt-6'>
        <div className=' bg-bg-color flex justify-between px-16 '>
            <img src={MBT } alt="" />
            <img src={META } alt="" />
            <img src={OpenS } alt="" />
        </div>
      </section>
       
      <h1 className='m-4 text-center text-2xl pt-4 font-bold md:font-extrabold'>
      Inspiration for your next adventure
      </h1>

      
      <Card />
      
      <LearnMore />
      

      <Footer />
      
      

      
    </div>
  );
}

export default App;
