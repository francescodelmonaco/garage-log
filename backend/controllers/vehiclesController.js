const dbConnection = require("../data/garage-log-db.js") // file di collegamento al datatbase

// controller per la logica dei veicoli
function index(req, res) {
    dbConnection.query("SELECT * FROM vehicles", (err, results) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server INDEX function'
            });
        res.json(results);
    });

    res.send("Lista di tutti i veicoli presenti nel garage");
};

function show(req, res) {
    res.send("Dettagli del veicolo " + req.params.id);
};

function store(req, res) {
    console.log(req.body);
    res.send("Creazione di un nuovo veicolo");
};

function update(req, res) {
    res.send("Modifica integrale del veicolo " + req.params.id);
};

function destroy(req, res) {
    res.send("Eliminazione del veicolo " + req.params.id);
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};