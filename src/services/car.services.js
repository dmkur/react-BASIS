import {axiosService} from "./axios.services";
import {urls} from "../constatnts";

const carServices = {
    getAllCars: () => axiosService.get(urls.cars),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.put(`${urls.cars}/${id}`)
}

export {
    carServices
}
