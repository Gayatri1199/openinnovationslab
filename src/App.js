import './App.css';
import Webheader from './Components/Webheader';
import Herosection from './Components/Herosection';
import ToyCategory from './Components/ToyCategory';
import Youwilllove from './Components/Youwilllove';
import Bestcollection from './Components/Bestcollection';
import Popular from './Components/Popular';
import KidsEvents from './Components/KidsEvents';
import Fromblog from './Components/Fromblog';
import Footer from './Components/Footer';
import Testimonails from './Components/Testimonails';

function App() {
  return (
    <div className="App">
     <Webheader />
     <Herosection />
     <ToyCategory />
     <Youwilllove />
     <Bestcollection />
      <KidsEvents />
     <Popular />
     <Testimonails />
     <Fromblog />
     <Footer />
    </div>
  );
}

export default App;
