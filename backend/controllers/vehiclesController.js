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
};

function show(req, res) {
    const { id } = req.params;

    dbConnection.query("SELECT * FROM vehicles WHERE id=?", [id], (err, results) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server SHOW function'
            });

        if (results.length === 0)
            return res.status(404).json({
                error: 'Veicolo non trovato'
            })

        res.json(results);
    });

};

function store(req, res) {
    const { type, brand, model, plate, vin, color, fuel } = req.body;

    console.log("BODY:", req.body);

    dbConnection.query(
        "INSERT INTO vehicles (type, brand, model, plate, vin, color, fuel) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [type, brand, model, plate, vin, color, fuel],
        (err, result) => {
            if (err) {
                console.error("Errore SQL:", err);
                return res.status(500).json({
                    error: 'Errore lato server STORE function'
                });
            }

            res.json({ id: result.insertId, ...req.body });
        }
    );
}

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