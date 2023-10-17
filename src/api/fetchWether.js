import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "dd1a6bc350f4555b20ee2fba0d9cf1ca";

export const fetchWether = async(query) =>{

const { data } = await axios.get(URL,{
    params:{
        q:query,
        units:'metric',
        appid:API_KEY
    }  
});

    return data;
}


