import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/contacts";

export const listContacts = () => axios.get(REST_API_BASE_URL);

export const createContact = (contact) => axios.post(REST_API_BASE_URL, contact);

export const getContact = (contactId) => axios.get(REST_API_BASE_URL + "/" + contactId);