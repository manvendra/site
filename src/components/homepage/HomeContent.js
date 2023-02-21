import { Link } from "react-router-dom";
import { SITE_MODULES as modules } from '../../common/Constants'

const HomeContent = () => {

	return (
		<div className="content">

			{/* <div className="small-text container-description {">
				This website is a  collection of my random interests. Feel free to navigate.
				Here are some quick links.
			</div> */}
			<div className="zigzag-container">
				{modules.map((module, index) => (
					(module.homeEnabled) && (
						<div className="horizontal-card">
							<div className="img-div">
								<img src={module.img} alt={module.shortDesc}></img>
							</div>

							<header> {module.title}</header>
							<section> {module.longDesc}
								<Link to={module.link} key={'home_content_section_' + index}>
									<button className="round-button tertiary-color-button  padding-top-5">Show more</button>
								</Link>
							</section>
						</div>
					)
				))}
			</div>


		</div>
	);
}
export default HomeContent;