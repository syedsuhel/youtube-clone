import axios from "axios";

const baseApi = "https://www.googleapis.com/youtube/v3";

export const searchApi=(searchStr)=>{
    return axios.get(`${baseApi}/search?part=snippet&q=${searchStr}&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}`)
}