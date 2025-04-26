import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/contacts";

export const listContacts = () => {
    return axios.get(REST_API_BASE_URL);
}