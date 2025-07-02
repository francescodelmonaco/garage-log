const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;

const vehiclesRoutes = require("./routes/vehiclesRouter.js");
const imagePathMw = require("./middlewares/imagePath.js");

// MIDDLEWARES
// gestione file statici nella cartella public
app.use(express.static("public"));

// lettura file json
app.use(express.json());

// gestione immagini
app.use(imagePathMw);



// ROUTES
app.use("/vehicles", vehiclesRoutes);



// attivazione server
app.listen(port, () => {
    console.log(`Server avviato sulla porta: ${port}`);
});