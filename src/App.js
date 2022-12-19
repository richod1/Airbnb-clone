import './App.css';
import NavHeader from './components/NavHeader';
import TopNav from './components/TopNav';
import Listings from './components/Listings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <NavHeader/>
      <Listings/>
      <Footer/>
    </div>
  );
}

export default App;
