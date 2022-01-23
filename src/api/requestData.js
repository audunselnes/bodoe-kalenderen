const cheerio= require("cheerio");
const axios= require("axios");

const axiosConfig = {
    url: "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://tikkio.com/in/bodo")
    withCredentials: false,
    origin: "*",
    headers: {'Access-Control-Allow-Origin': '*'}
}

const getEventData = async () => 
    await axios(
        //"https://tikkio.com/in/bodo", {headers: {
        //'Access-Control-Allow-Origin': '*',
        //"withCredentials": true
      //}}
      axiosConfig
      ).then(res => {
        const $ = cheerio.load(res.data);
        const data= [];
        $(".top-event").map((index, element) => {
            const link= $(element)
                .attr("href");
            const title= $(element)
                .find(".title")
                .attr("title");
            const description= $(element)
                .find(".location")
                .text();
            const image= $(element)
                .find(".image")
                .attr("data-src");
            data.push({link, title, description, image});
            
        })
        return data;
    });

    getEventData().then(a=> console.log(a));

    export default getEventData;