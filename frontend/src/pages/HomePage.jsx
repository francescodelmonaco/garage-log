import { useState, useEffect } from "react";

export default function HomePage() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h1 className="text-center font-bold text-4xl py-4">Il mio garage</h1>

            <div>
                {
                    vehicles.map((v, index) => {
                        const { brand, model, image } = v;

                        return (
                            <div key={index}>
                                <figure>
                                    <img src={image} alt={`${brand} ${model} image`} />
                                </figure>
                                <h3>{brand} {model}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
} 