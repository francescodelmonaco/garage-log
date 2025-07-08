import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

    // GET
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(err => console.error(err))
    }, []);

    // form
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <h1 className="text-center font-bold text-4xl py-4">Il mio garage</h1>

            <div className="py-3 flex justify-end align-middle">
                <button
                    onClick={() => setShowForm(prev => !prev)}
                    className="py-2 px-4 bg-cyan-950 text-white rounded-full shadow"
                >
                    <i className="fa-solid fa-plus"></i> Aggiungi un veicolo
                </button>
            </div>

            {showForm && (
                <form className="relative my-4 pt-15 bg-gray-200 flex flex-col gap-2 max-w-md mx-auto p-4 rounded-2xl shadow">
                    <button
                        onClick={() => setShowForm(prev => !prev)}
                        className="absolute top-4 right-4"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <select
                        name="type"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    >
                        <option defaultValue={""}>Seleziona il tipo di veicolo</option>
                        <option value="auto">Automobile</option>
                        <option value="moto">Motocicletta</option>
                        <option value="bici">Bicicletta</option>
                    </select>

                    <input
                        name="brand"
                        placeholder="Marca"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <input
                        name="model"
                        placeholder="Modello"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <input
                        name="plate"
                        placeholder="Targa"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <input
                        name="frame_number"
                        placeholder="Numero di telaio"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <input
                        name="color"
                        placeholder="Colore"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <input
                        name="fuel"
                        placeholder="Alimentazione"
                        className="px-3 py-2 rounded border border-gray-400"
                        required
                    />
                    <button type="submit" className="bg-emerald-700 text-white rounded-full py-2">Aggiungi</button>
                </form>
            )}

            <div className="flex gap-2">
                {
                    vehicles.map((v, index) => {
                        const { brand, model, image } = v;

                        return (
                            <Link
                                key={index}
                                className="basis-1/3 bg-gray-200 p-8 rounded-2xl shadow"
                                to={`/vehicles/${v.id}`}
                            >
                                <figure>
                                    <img src={image} alt={`${brand} ${model} image`} />
                                </figure>

                                <h3 className="text-center py-4 font-bold text-xl text-black">{brand} {model}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
} 