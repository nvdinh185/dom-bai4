// const url = "https://dinh-list-users.herokuapp.com";
const url = "http://localhost:4000";

const axiosClient = axios.create({
    baseURL: url,
    headers: {
        'content-type': 'application/json',
    },
});