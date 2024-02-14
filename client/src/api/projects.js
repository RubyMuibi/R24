import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getProjects = async () => {
    const response = await axios.get(`${serverUrl}/projects`);
    const responseData = await response.data;

    return responseData
};