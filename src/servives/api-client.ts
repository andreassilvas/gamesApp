import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "db0b3b3f7ab3439d9db88ad47633a964",
    },
})