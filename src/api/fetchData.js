import axios from "axios";
const URLAPI = 'https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones'

const fetchData = () => {
    return axios.get(URLAPI)
};

export default fetchData;