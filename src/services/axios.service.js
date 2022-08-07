import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

const axiosService = axios.create({
    baseURL
});

// сервіс що врізається у запит до серверу
// та робить додаткові маніпуляції

// запит при request
axiosService.interceptors.request.use((config) => {
    const access = authService.getAccessToken()

    // при усіх запиті буде додано access key
    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {axiosService}
