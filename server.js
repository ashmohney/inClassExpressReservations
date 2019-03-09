const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3000;

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/", (req, res) => {
    console.log(req.params)
    res.sendFile(__dirname + "/public/pages/index.html")
});

app.get("/reserve", (req, res) => {
    console.log(req.params)
    res.sendFile(__dirname + "/public/pages/reserve.html")
});

app.get("/tables", (req, res) => {
    console.log(req.params)
    res.sendFile(__dirname + "/public/pages/tables.html")
});


app.post("pages/tables", (req, res) => {
    let newRequest = req.body;

    newRequest.routeName = newRequest.name.replace(/\s+/g, "").toLowerCase();

    console.log(newRequest);

    characters.push(newRequest);

    res.json(newRequest);
});





app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT}`)
});