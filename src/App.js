
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Freemint from './components/freemint';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <>
    <h2 className='hehe'>Currently Not supported on mobile screens</h2>
    <div className='main'>
    <Header/>
    <Banner/>
    <Freemint/>
    <Faq/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
