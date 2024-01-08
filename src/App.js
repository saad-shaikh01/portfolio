import logo from './logo.svg';
import './App.css';
import Navbar from './containers/navbar';
import CustomButton from './components/buttons/button'
import Hero from './containers/hero';
import Counter from './components/counter';
import ServicesSection from './containers/services';
import About from './containers/about';
import Footer from './containers/footer';
function App() {
  return (
    <>
    <div className='Main'>
    <Navbar/>
    <Hero />
    <ServicesSection/>
    <About />
    <Footer />
    {/* <Counter number={300} duration={30} /> */}


    </div>
    </>
  );
}

export default App;
