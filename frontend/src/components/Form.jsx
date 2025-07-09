import { useGlobalContext } from "../contexts/GlobalContext";

export default function Form() {

    const {
        setShowForm,
        formData,
        handleChange,
        handleSubmit
    } = useGlobalContext();

    return (
        <form
            onSubmit={handleSubmit}
            className="relative my-4 pt-15 bg-gray-200 flex flex-col gap-2 max-w-md mx-auto p-4 rounded-2xl shadow"
        >
            <button
                onClick={() => setShowForm(prev => !prev)}
                className="absolute top-4 right-4"
            >
                <i className="fa-solid fa-xmark"></i>
            </button>

            <select
                name="type"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.type}
                onChange={handleChange}
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
                value={formData.brand}
                onChange={handleChange}
                required
            />

            <input
                name="model"
                placeholder="Modello"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.model}
                onChange={handleChange}
                required
            />

            <input
                name="plate"
                placeholder="Targa"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.plate}
                onChange={handleChange}
                required
            />

            <input
                name="vin"
                placeholder="Numero di telaio"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.vin}
                onChange={handleChange}
                required
            />

            <input
                name="color"
                placeholder="Colore"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.color}
                onChange={handleChange}
                required
            />

            <select
                name="fuel"
                className="px-3 py-2 rounded border border-gray-400"
                value={formData.fuel}
                onChange={handleChange}
                required
            >
                <option defaultValue={""}>Seleziona il tipo di alimentazione</option>
                <option value="benzina">Benzina</option>
                <option value="diesel">Diesel</option>
                <option value="elettrico">Elettrico</option>
                <option value="ibrido">Ibrido</option>
            </select>

            <button type="submit" className="bg-emerald-700 text-white rounded-full py-2">Aggiungi</button>
        </form>
    )
}