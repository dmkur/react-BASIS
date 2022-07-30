import axios from "axios";
import {baseURL} from "../constatnts";

let axiosService = axios.create({
    baseURL
});

export {
    axiosService
}