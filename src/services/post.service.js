import {axiosService} from "./axios.service";
import {URLS} from "../constants";

const postService = {
    getAllPosts: () => axiosService.get(URLS.posts)

}

export {postService}