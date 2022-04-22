import axios from "axios"

export const get = async (URL) => {
    let response;
    try {
        response = await  axios.get(URL);
    } catch (err) {
        console.error('error in calling backend');
        if (err.response) {
            console.error(err.response.data)
            console.error(err.response.status)
            console.error(err.response.header)
        } else if (err.message){
            console.error(err.message)
        }else{
            console.error(err)
        }
        response = {};
    }
    return response;
};


