const express = require("express")
const app = express();
const axios = require("axios")

app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render("index", {
        title: "Home page"
    })
})


app.get("/about", (req, res) => {

    res.render("about", {
        title: "About"
    })
})


app.get("/news", (req, res) => {

    const url = 'https://berita-indo-api.vercel.app/v1';

    axios.get(`${url}/cnbc-news`)
    .then(result => {
        res.render("news", {
            title: "Indonesia News",
            news: result.data.data
        })
    })   
})



app.get("/corona", (req, res) => {
    const url = 'https://api.kawalcorona.com/indonesia/provinsi';

    axios.get(`${url}`)
    .then(result => {
        res.render("corona", {
        title: "Data Pengidap Corona",
        corona: result.data
        })
    })
})




app.get("/greet", (req, res) => {
    res.render("greet", { nama: req.query.name })
})




app.listen(3000, () => console.log("server siap digunakan di 3000 localhost"))