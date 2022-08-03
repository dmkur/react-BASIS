import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carServices = {
    createCar: (car) => axiosService.post(urls.car, car),
    getAllCars: () => axiosService.get(urls.car),
    deleteCarById: (id) => axiosService.delete(`${urls.car}/${id}`)
}


export {carServices}
