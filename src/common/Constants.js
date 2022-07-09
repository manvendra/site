/**Trying not to have ay string literals in code.. all constants should be in this file */

export const POSTS_URL = process.env.REACT_APP_URL_POSTS;
export const POSTS_KEY = process.env.REACT_APP_KEY_POSTS;
export const POSTS_QRY_PARAM = 'orderBy=updated&status=live&maxResults=24&fetchImages=true';
export const POSTS_LABEL_RANK = 'rank=';


export const PHOTOS_URL = process.env.REACT_APP_URL_INSTA;
export const PHOTOS_TKN = process.env.REACT_APP_TKN_INSTA;
export const PHOTOS_QRY_PARAM = 'fields=id, caption, media_type, media_url';


export const CONTACT_ME_URL = process.env.REACT_APP_URL_CONTACT_ME;
export const CONTACT_ME_HEADERS = "'Content-Type': 'application/x-www-form-urlencoded'"

export const EMPTY = '';


export const URL_INSTA_FEED_DEV = 'http://localhost:3001/photos';
export const URL_POSTS_DEV = 'http://localhost:3001/posts';

export const MASONRY_COLUMN_BREAKPOINTS = {
	default: 5,
	1468: 5,
	1200: 4,
	768: 3,
	599: 2,
	360: 1
};

export const SOCIAL_LINKS = {
	INSTAGRAM: 'https://www.instagram.com/mpskaleidoscope/',
	MEDIUM: 'https://medium.com/@manvendrapsingh',
	LINKEDIN: 'https://www.linkedin.com/in/manvendrapsingh/'
}


export const SITE_MODULES = [
	{
		title: 'Home',
		shortDesc: 'Welcome to manvendrapsingh.com.',
		longDesc: '',
		link: '/home',
		img: '',
		navEnabled: true,
		homeEnabled:false,
	}
	,
	{
		title: 'BlogPosts',
		shortDesc: '',
		longDesc: 'My thoughts & opinions on ideas and events in Technology, History, Science, Software & programing.',
		link: '/posts',
		img: '/images/blg.png',
		navEnabled: true,
		homeEnabled:true,
	},
	{
		title: 'Photography',
		shortDesc: 'Random clicks at not so random locations, all from iphone.',
		longDesc: 'Some random clicks at not so random locations, all taken from iphone. Mostly iPhone7.',
		link: '/photos',
		img: '/images/pht.png',
		navEnabled: true,
		homeEnabled:true,
	},

	{
		title: 'Reviews',
		shortDesc: 'My opinions on various different "things"',
		longDesc: 'My thoughts & recommendations about "things" across various catagories.  Some articles may contain affiliated links',
		link: '/reviews',
		img: '/images/rvw.png',
		navEnabled: true,
		homeEnabled:true,
	},
	{
		title: 'About Me',
		shortDesc: 'Nothing much interesting.',
		longDesc: 'Just another subpar technologist, Who loves Coding, Chocolates, Mountains, History, Philosophy & Construction. Not necessarily in same order',
		link: '/about',
		img: '/images/sp-me3.png',
		navEnabled: true,
		homeEnabled:true,
	},
];