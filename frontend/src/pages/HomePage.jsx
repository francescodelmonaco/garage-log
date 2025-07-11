import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

// components
import Form from "../components/Form";

export default function HomePage() {

    const {
        vehicles,
        showForm,
        setShowForm
    } = useGlobalContext();

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

            <div className="flex gap-2">
                {
                    vehicles.map((v, index) => {
                        const { brand, model } = v;

                        return (
                            <Link
                                key={index}
                                className="lg:basis-1/3 sm:basis-1/2 bg-gray-200 p-8 rounded-2xl shadow"
                                to={`/vehicles/${v.id}`}
                            >
                                <h3 className="text-center font-bold text-xl text-black">{brand} {model}</h3>
                            </Link>
                        )
                    })
                }
            </div>

            {showForm && (
                <>
                    <div className="fixed inset-0 bg-black opacity-75"></div>
                    <Form />
                </>
            )}
        </>
    )
} 