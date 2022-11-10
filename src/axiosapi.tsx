
import axios from "axios";

axios.defaults.withCredentials = true;

//const APIserver = "http://happy-jackpot-day.com:8000";
const APIserver = "http://localhost:8000";

const axiosAPI = axios.create({
    baseURL: APIserver,
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
})

export const byFile = axios.create({
    baseURL: APIserver,
    headers: {
        ContentType: "multipart/form-data",
        timeout : 1000,
    },
})

export const defaultTime = {
    first: 500,
    second: 900,
    third: 1100,
    fourth: 1300,
    fifth: 1500
}


export default axiosAPI;
