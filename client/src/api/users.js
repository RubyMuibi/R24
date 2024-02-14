import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getUserToken = async (token) => {
    const response = await axios.get(`${serverUrl}/users/auth/${token}`);
    const responseData = await response.data;

    return responseData
};

export const getUser = async () => {
    const response = await axios.get(`${serverUrl}/users`);
    const responseData = await response.data;

    return responseData
};