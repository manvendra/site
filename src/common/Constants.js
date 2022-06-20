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
    default: 6,
    1468: 5,
    1200: 4,
    768: 3,
    599: 2,
    360: 1
  };