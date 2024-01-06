import logo from './logo.svg';
import './App.css';
import Navbar from './containers/navbar';
import CustomButton from './components/buttons/button'
import Hero from './containers/hero';
import Counter from './components/counter';
import ServicesSection from './containers/services';
function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <ServicesSection/>
    <Counter number={300} duration={30} />
    </>
  );
}

export default App;
