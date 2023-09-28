import axios from "axios";
const instance = axios.create({
 //  baseURL:'http://127.0.0.1:5001/fir-42dd5/us-central1/api'
   baseURL:'https://us-central1-fir-42dd5.cloudfunctions.net/api'
});
export default instance;