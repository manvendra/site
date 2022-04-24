import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogPosts from './components/blog-post/BlogPosts';
import Home from './components/homepage/Home';
import AboutMe from './components/about/AboutMe';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Photography from './components/photography/Photography';
import PostsList from './components/blog-post/PostsList';
import Post from './components/blog-post/Post';
import NotFound from './common/NotFound';
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/mysite" element={<Home />} />
					<Route path="/mysite/home" element={<Home />} />
					<Route path='/mysite/posts' element={<BlogPosts />} >
						<Route index element={<PostsList />} />
						<Route path='list' element={<PostsList />} />
						<Route path=':postId' element={<Post />} />
					</Route>
					<Route path='/mysite/photos' element={<Photography />} />
					<Route path='/mysite/about' element={<AboutMe />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}
export default App;
