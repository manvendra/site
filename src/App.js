
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Posts from './components/posts/Posts';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
