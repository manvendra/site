import { Link } from "react-router-dom";

const HomeContent = () => {
	const sections = [
		{
			title: 'Blog Posts',
			desc: 'My opinions on ideas and events in Tech, History, Science & Coding.',
			link: '/posts',
			img:'/images/blg3.jpeg'
		},
		{
			title: 'Photography',
			desc: 'Random clicks at not so random locations, all from iphone.',
			link: '/photos',
			img:'/images/b.png'
		},
		
		{
			title: 'Reviews',
			desc: 'My opinions on various different "things"' ,
			link: '/reviews',
			img: '/images/rvw.jpg'
		},
		{
			title: 'About Me',
			desc: 'Nothing much interesting.',
			link: '/about',
			img:'/images/sp-me2.png'
		},


	];
	return (
		<div className="content">
			{/* <div className="small-text container-description {">
				This website is a  collection of my random interests. Feel free to navigate.
				Here are some quick links.
			</div> */}
			<div className="cards-container">
				{sections.map((section, index) => (
					<Link to={section.link} key={index}>
						<div className="card">
						    <img src= {section.img} alt=".."></img>
							<header> {section.title}</header>
							<section> {section.desc}</section>
						</div>
					</Link>
				))}
			</div>


		</div>
	);
}
export default HomeContent;