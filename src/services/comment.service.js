import {axiosService} from "./axios.service";
import {URLS} from "../constants";

const commentService = {
    getAllComments: () => axiosService.get(URLS.comments)
}

export {commentService}