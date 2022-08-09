import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {authService} from "./auth.service";

const carServices = {
    // params - додаткові параметри url тут це сторінки
    getAllCars: (page=1) => axiosService.get(urls.car, {params:{page}}
        // // даний фенкціонал додає access ключ до запиту
        // // щоб отримати дані
        // // щоб не робити це для кожного запиту
        // // використовують interceptions в axios service
        // , {headers:{
        //     //Bearer or JWT it`s key word
        //     Authorization: `Bearer ${authService.getAccessToken()}`}}
    ),
    createCar: (car) => axiosService.post(urls.car, car),
    deleteCarById: (id) => axiosService.delete(`${urls.car}/${id}`),
    updateCarById: (id, data) => axiosService.put(`${urls.car}/${id}`, data),
}


export {carServices}
