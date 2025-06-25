const express = require("express");
const app = express();
const port = 3000;

const vehiclesRoutes = require("./routes/vehicles");

app.use(express.json());

// Middleware per leggere JSON nel body delle richieste
app.use("/vehicles", vehiclesRoutes);

app.listen(port, () => {
    console.log(`Server avviato sulla porta: ${port}`);
});