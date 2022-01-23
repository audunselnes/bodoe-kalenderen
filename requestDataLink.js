const cheerio= require("cheerio");
const axios= require("axios");

axios.get("https://tikkio.com/in/bodo").then(urlResponse => {
    const $= cheerio.load(urlResponse.data);
    $("a").each((i, element) => {
        const link= $(element)
            .attr("href");
        if (link.includes("https://tikkio.com/tickets/")) {
        console.log(link);
    }
    })
})
