import * as Constants from '../common/Constants'
import axios from "axios";

const url = Constants.PHOTOS_URL + '?' + Constants.PHOTOS_QRY_PARAM + '&access_token=' + Constants.PHOTOS_TKN;

const photosStore = (set) => ({
    photos: [],
    shouldFetchPhotos: true,
    fetchPhotos: async () => {
        const response = await axios.get(url)
        set({ photos: await response.data.data, shouldFetchPhotos: false });
    }
});

export default photosStore;