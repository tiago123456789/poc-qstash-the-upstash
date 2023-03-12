require("dotenv").config()
const axios = require("axios")
const crypto = require("crypto")

const TOKEN = process.env.TOKEN
const URL = process.env.URL

axios.post(
    URL, 
    { id: crypto.randomUUID({ disableEntropyCache : true }), "message": "hello world teste 2222" },
    { 
        headers: {
            'Upstash-Retries': 2,
            Authorization: TOKEN,
            "Content-Type": "application/json"
        }
    }
)
.then(({ data }) => console.log(data))
.catch(console.log)