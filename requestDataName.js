const cheerio= require("cheerio");
const axios= require("axios");

axios.get("https://tikkio.com/in/bodo").then(urlResponse => {
    const $= cheerio.load(urlResponse.data);
    $("div.inner-content").each((i, element) => {
        const name= $(element)
            .find("div")
            .attr("title");
        console.log(name);
    })
})