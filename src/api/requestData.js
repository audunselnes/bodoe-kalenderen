const cheerio= require("cheerio");
const axios= require("axios");

const axiosConfig = {
    url: process.env.REACT_APP_IS_DEV == "true" ? "/scrape": "https://us-central1-bodokal.cloudfunctions.net/scrape",
    withCredentials: false,
    origin: "*",
    headers: {'Access-Control-Allow-Origin': '*'}
}

const getEventData = async () => 
   await axios(axiosConfig).then(a => a.data);


export default getEventData;