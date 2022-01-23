const cheerio= require("cheerio");
const axios= require("axios");

const axiosConfig = {
    url: "/scrape",
    withCredentials: false,
    origin: "*",
    headers: {'Access-Control-Allow-Origin': '*'}
}

const getEventData = async () => 
   await axios(axiosConfig).then(a => a.data);
   


export default getEventData;