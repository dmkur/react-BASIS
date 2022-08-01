import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carServices = {
    createCar: (car) => axiosService.post(urls.car, car),
    getAllCars: () => axiosService.get(urls.car)
};

export {carServices}
