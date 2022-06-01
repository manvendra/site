import * as Constants from '../common/Constants'
import * as Utils from '../common/Utils'
import axios from "axios";

const url = Constants.POSTS_URL + '?' + Constants.POSTS_QRY_PARAM + '&key=' + Constants.POSTS_KEY;

const postsStore = (set) => ({
    posts: [],
    shouldFetchPosts: true,
    fetchPosts: async () => {
            const response = await axios.get(url);
            set({ posts: await Utils.sortPostByRank(response.data.items), shouldFetchPosts: false});
    }
  });
  
  export default postsStore;