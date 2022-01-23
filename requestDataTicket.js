//import fetch from 'node-fetch'
//const fetch= require('node-fetch');
const axios= require("axios");

const getData= async() => { 
    await axios('https://app.ticketmaster.com/discovery/v2/events.json?keyword=bodø&apikey=XUZoiEIMfMUn1QIAMpXt6CmO6aCM6GUa')
.then(response => console.log(response))
//.then(data => console.log(data));
};

getData();