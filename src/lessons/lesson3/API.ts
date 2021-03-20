import axios from 'axios';


const key = '4b10ec35';
const settings = {
    withCredentials: true,
    headers: {
       // 'API-KEY': key
    }
}


const configOMB = {
    baseURL: 'http://www.omdbapi.com',
  //  ...settings
};

const axiosInstance = axios.create(configOMB);
const API = {
    searchFilmsByTitle: (title: string) => {
      return   axiosInstance.get(`/?t=${title}&apikey=4b10ec35`)
          /*.then((res)=>{
              debugger
          })*/

    },
    searchFilmsByType: (title: string, type: string) => {
        return   axiosInstance.get(`/?s=${title}&?type=${type}&apikey=4b10ec35`)

    }
};


export default API;
