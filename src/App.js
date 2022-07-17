import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './AnimatedRoutes';


const App = () => {


	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className='content-area'>
					<AnimatedRoutes />
				</div>
			</Router>
			<Footer />
		</div>
	);
}
export default App;
