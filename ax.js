const axios = require("axios")

let url = "https://thevirustracker.com/free-api?global=stats";



app.get ((params) => {
    

axios.get(url)
.then(data =>{
console.log(data);

})

})