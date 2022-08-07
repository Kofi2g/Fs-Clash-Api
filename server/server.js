require ("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

const url = "https://api.clashofclans.com/v1/players/%232889v22uq";
const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_TOKEN}`
    }
}

app.get("/api", (req, res) => {

    const clashReq = async () => {
        try {
            const response = await axios.get(url, config)

            res.json(response.data)
            
            //name, townhalllvl, trophies, best trophies, builderhall lvl, 
            //  league, name,icon, current/previous/best season trophies

            // const {name,tag,townHallLevel} = response.data
          
            // res.json({name, tag, townHallLevel});
           
        } catch (error) {
            console.log(error);
        }
    }
    clashReq(); 
})

app.listen(5000, () => {
    console.log("listening on 5k")
})


