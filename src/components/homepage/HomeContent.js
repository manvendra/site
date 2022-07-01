import { Link } from "react-router-dom";

const HomeContent = () => {
	const sections = [
		{
			title: 'Blog Posts',
			desc: 'My opinions on Technology, History, Politics, Science, Coding',
			link: '/posts',
			img:'/images/blg1.jpg'
		},
		{
			title: 'Photography',
			desc: 'My random clicks on phones.',
			link: '/photos',
			img:'/images/cmr.jpg'
		},
		{
			title: 'About Me',
			desc: 'Nothing much interesting.',
			link: '/about',
			img:'/images/avtr.png'
		},
		{
			title: 'Product Reviews',
			desc: 'Some of my favourite "things""',
			link: '/reviews',
			img: '/images/rvw.jpg'
		},


	];
	return (
		<div className="content">
			<div className="multi-color-text">
				This website is a  collection of my random interests. Feel free to navigate.
				Here are some quick links.
			</div>
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