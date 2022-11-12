import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

import Navbar from './components/navbar/navbar';
import Section from './components/section/section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
