import { Link } from "react-router-dom";
import { SITE_MODULES as modules } from '../../common/Constants'

const HomeContent = () => {
	 
	return (
		<div className="content">
	
			{/* <div className="small-text container-description {">
				This website is a  collection of my random interests. Feel free to navigate.
				Here are some quick links.
			</div> */}
			<div className="cards-container">
				{modules.map((module, index) => (
					(module.homeEnabled) && (
					<Link to={module.link} key={'home_content_section_'+index}>
						<div className="card">
						    <img src= {module.img} alt=".."></img>
							<header> {module.title}</header>
							<section> {module.shortDesc}</section>
						</div>
					</Link>
					)
				))}
			</div>


		</div>
	);
}
export default HomeContent;