import { Link } from "react-router-dom";
import { SITE_MODULES as modules } from '../../common/Constants'

const HomeContent = () => {

	return (
		<div className="content">

			{/* <div className="small-text container-description {">
				This website is a  collection of my random interests. Feel free to navigate.
				Here are some quick links.
			</div> */}

			{modules.map((module, index) => (
				(module.homeEnabled) && (
					<div className="simple-card">
						<header> {module.title}</header>
						<section>
							<img src={module.img} alt={module.shortDesc}></img>
							<div className="desc">
								{module.longDesc}
							</div>
							
						</section>
						<footer>
							<Link to={module.link} key={'home_content_section_' + index}>
								<button className="round-button tertiary-color-button  padding-top-5 ">Show more</button>
							</Link>
							</footer>
					</div>
				)
			))}



		</div>
	);
}
export default HomeContent;