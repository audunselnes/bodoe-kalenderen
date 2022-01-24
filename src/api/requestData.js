const axios = require("axios");

const axiosConfig = {
	url: "https://us-central1-bodokal.cloudfunctions.net/scrape",
};

const getEventData = async () => await axios(axiosConfig).then((a) => a.data);

export default getEventData;
