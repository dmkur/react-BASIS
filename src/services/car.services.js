import {axiosService} from "./axios.service";

const carServices = {
    createCar: (car) => axiosService.post(car),

};

export {carServices}