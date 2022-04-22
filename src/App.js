import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogPosts from './components/blog-post/BlogPosts';
import Home from './components/homepage/Home';
import AboutMe from './components/about/AboutMe';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Photography from './components/photography/Photography';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/posts' element={<BlogPosts />} />
          <Route path='/photos' element={<Photography />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
