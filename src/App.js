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
    <div className='font-redrose' >
     
        <NavBar />

        <Hero />

      <section className=' bg-bg-color'>
        <div  className='container flex flex-col-reverse md:flex-row md:justify-between items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
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
