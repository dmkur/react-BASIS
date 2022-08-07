import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {authService} from "./auth.service";

const carServices = {
    createCar: (car) => axiosService.post(urls.car, car),
    getAllCars: () => axiosService.get(urls.car
        // // даний фенкціонал додає access ключ до запиту
        // // щоб отримати дані
        // // щоб не робити це для кожного запиту
        // // використовують interceptions в axios service
        // , {headers:{
        //     //Bearer or JWT it`s key word
        //     Authorization: `Bearer ${authService.getAccessToken()}`}}
    ),
    deleteCarById: (id) => axiosService.delete(`${urls.car}/${id}`),
    updateCarById: (id, data) => axiosService.put(`${urls.car}/${id}`, data),
}


export {carServices}
