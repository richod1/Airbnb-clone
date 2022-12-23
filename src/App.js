import './App.css';
import NavHeader from './components/NavHeader';
import TopNav from './components/TopNav';
import Listings from './components/Listings';
import Footer from './components/Footer';
import Map from './components/Map'


function App() {
  return (
    <div className="App">
      <TopNav/>
      <NavHeader/>
      <Listings/>
      <Map/>
      <Footer/>
    </div>
  );
}
 
export default App;
