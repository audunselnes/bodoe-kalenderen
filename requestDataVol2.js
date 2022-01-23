const cheerio= require("cheerio");
const axios= require("axios");

axios.get("https://www.google.no/search?q=bod%C3%B8+arrangementer&sxsrf=AOaemvLzmDHeng-5nlZP7SW2h0hxSxnrpw%3A1642324552697&source=hp&ei=SOLjYf-SJ-2Fxc8P_fqKwAg&iflsig=ALs-wAMAAAAAYePwWO0sZOlw3YvX2_Ig8E1Nhcppg90t&ved=0ahUKEwj_1sPc97X1AhXtQvEDHX29AogQ4dUDCAY&uact=5&oq=bod%C3%B8+arrangementer&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BAguECc6DgguEIAEELEDEMcBEKMCOgsIABCABBCxAxCDAToICC4QsQMQgwE6CAgAEIAEELEDOgsILhCABBDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6BQgAEIAEOggILhCABBCxAzoLCC4QgAQQxwEQrwE6BggAEBYQHlAAWKAVYOkVaABwAHgCgAHSA4gBiRWSAQk0LjguMi4xLjGYAQCgAQE&sclient=gws-wiz").then(urlResponse => {
    const $= cheerio.load(urlResponse.data);
    console.log($.html());
    $("div.ZINbbc").each((i, element) => {
        const link= $(element)
            .find("a")
            .attr("href");
        console.log(link);
    })
})