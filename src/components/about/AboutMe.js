import './AboutMe.css';
import './Tabs.css'
import me from '../../images/me/me.png';
import Description from './Description';


const AboutMe = () => {
	return (
		<div className='about-me'>

			<div className='description'>
				<Description />
			</div>
			<div className='profile-pic'>
				<img src={me} alt="its-me" />
			</div>
			<div className='quick-summary'>
				<h3>Hello !<br /> I'm Manvendra P Singh</h3>
			</div>


		</div>
	);
}
export default AboutMe