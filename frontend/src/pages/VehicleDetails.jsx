import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

const url = import.meta.env.VITE_BASE_API_URL;

export default function VehicleDetails() {
    const { id } = useParams();

    const { fetchVehicles } = useGlobalContext();

    // SHOW
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                setVehicle(data)
                console.log("Veicolo selezionato", data)
            })
            .catch(err => console.error(err))
    }, [])

    // destrutturo le proprietà di vehicle
    const { brand, model, plate, vin, color, fuel } = vehicle;

    // DELETE
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`${url}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                fetchVehicles();
                navigate("/"); // torna alla home dopo l'eliminazione
                console.log("Veicolo eliminato correttamente")
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <h1 className="text-center font-bold text-4xl py-4">{brand} {model}</h1>

            <div className="py-3 flex justify-end align-middle">
                <button
                    className="py-2 px-4 bg-red-800 text-white rounded-full shadow"
                    onClick={handleDelete}
                >
                    <i className="fa-solid fa-trash"></i> Elimina il veicolo
                </button>
            </div>

            <div>
                <p><strong>Targa:</strong> {plate}</p>
                <p><strong>Numero di telaio:</strong> {vin}</p>
                <p><strong>Colore:</strong> {color}</p>
                <p><strong>Alimentazione:</strong> {fuel}</p>
            </div>
        </>
    )
}