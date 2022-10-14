import axios from "axios";

const fetchData = () => {
    return axios.get(process.env.URL_GENERAL_TESTING_AGM)
};

export default fetchData;