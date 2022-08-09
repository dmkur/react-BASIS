import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const axiosService = axios.create({
    baseURL
});


// при запиті:
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


// при реквесті
// при згорянні refresh and access

// маркер який каже чи в зараз відбувається refresh
let isRefreshing = false
axiosService.interceptors.response.use((config) => {
        // при варінті все OK ми просто вертаємо конфіг
        return config
    },
    // при reject тобто коли прийде від серверу відмова
    async (error) => {
        const refreshToken = authService.getRefreshToken();
        // умова при якій ми будемо слати наш refreshToken
        // чи помилка 401, чи є конфігурація помилки,
        // чи ми не а статусі рефрешу чи є refreshToken
        if (error.response?.status === 401 && error.config && !isRefreshing && refreshToken) {
            isRefreshing = true
            try {
                // оновлюємо наш токен
                // на цьому етапі ми отримаємо нову пару ключів
                const {data} = await authService.refresh(refreshToken);
                // і тепер нові токени записуємо в localStorage
                authService.setTokens(data)
            } catch (e) {
                //    в цей блок ми попадаємо якщо при рефреші наш токен той момент вже був просрочений
                //    відповідно видаляємо токени із localStorage і перенаправляємо на логін
                authService.deleteTokens()
                //    нажаль hook який перенеправляє не працює поза компонентами
                //    тому необхідна ліба history
                // додатково покахуємо що це через згорівший токен
                return history.replace('/login?ExpireSession=true')
            }
            isRefreshing = false
            //    повертаємо наш новий конфіг
            return axiosService(error.config)
        }
        // якщо ж усе невдалось викикдаємо помилку
        return Promise.reject(error)
    })

// Щоб подружити нашу сторінку логінації із history
// потрібно додати в index у  BrowserRouter  - unstable_HistoryRouter
// та передати history як об'єкт

export {axiosService, history}
