import {axiosService} from "./axios.services";
import {urls} from "../constatnts";

const carServices = {
    createCar: (data) => axiosService.post(urls.cars, data),
    getAllCars: () => axiosService.get(urls.cars),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carServices
}
