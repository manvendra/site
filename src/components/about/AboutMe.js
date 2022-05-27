import './AboutMe.css';
import './Tabs.css'
import me from '../../images/me/me.png';
import Description from './Description';
import { motion } from "framer-motion"
import { animation } from '../../common/animation'

const AboutMe = () => {
	return (
		<motion.div className='about-me'
			variants={animation}
			initial="initial"
			animate="animate"
			transition={animation.transition}>

			<div className='description'>
				<Description />
			</div>
			<div className='profile-pic'>
				<img src={me} alt="its-me" />
			</div>
			<div className='quick-summary'>
				<h4>Hello !<br /> I'm Manvendra P Singh</h4>
			</div>

		</motion.div>
	);
}
export default AboutMe