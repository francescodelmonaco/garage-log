import { createContext, useContext, useState, useEffect } from "react";

const url = import.meta.env.VITE_BASE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // GET
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(err => console.error(err))
    }, []);

    // form
    const [showForm, setShowForm] = useState(false); // apertura e chiusura form aggiunta veicolo
    const [formData, setFormData] = useState({
        type: "",
        brand: "",
        model: "",
        plate: "",
        vin: "",
        color: "",
        fuel: ""
    });

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value }); // modifica dati form
    const handleSubmit = e => {
        e.preventDefault();

        // STORE
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setVehicles([...vehicles, data]);
                setShowForm(false);
                setFormData({
                    type: "",
                    brand: "",
                    model: "",
                    plate: "",
                    vin: "",
                    color: "",
                    fuel: ""
                });
            })
            .catch(err => console.error(err));
    }

    const value = {
        vehicles,
        showForm,
        setShowForm,
        formData,
        handleChange,
        handleSubmit
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };