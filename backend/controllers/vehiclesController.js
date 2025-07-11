const dbConnection = require("../data/garage-log-db.js") // file di collegamento al datatbase

// controller per la logica dei veicoli

// mostra tutti i veicoli
function index(req, res) {
    dbConnection.query("SELECT * FROM vehicles", (err, results) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server INDEX function'
            });

        res.json(results);
    });
};

// mostra un solo veicolo
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

        res.json(results[0]);
    });

};

// crea un nuovo veicolo
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

// elimina un veicolo
function destroy(req, res) {
    const { id } = req.params;

    dbConnection.query(
        "DELETE FROM vehicles WHERE id=?", [id], (err, result) => {
            if (err) {
                console.error("Errore SQL:", err);
                return res.status(500).json({ error: 'Errore lato server DESTROY function' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: 'Veicolo non trovato'
                });
            }
            res.json({ message: 'Veicolo eliminato con successo' });
        }
    );
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};