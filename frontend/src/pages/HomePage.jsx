// const vehicles = [
//     {
//         id: 1,
//         type: 'automobile', // 'automobile', 'motocicletta', 'bicicletta'
//         brand: 'Audi',
//         model: 'A3',
//         plate: 'AB123CD',
//         frame_number: 'XYZ1234567890',
//         year: 2020,
//         color: 'nero',
//         fuel: 'diesel', // 'benzina', 'electtrica', 'diesel', 'ibrida'
//         mileage: 85000,

//         owner: {
//             name: 'Mario Rossi',
//             taxCode: 'RSSMRA80A01H501U',
//             phone: '3331234567',
//             email: 'mario@example.com',
//         },

//         maintenance: [
//             {
//                 id: 'm001',
//                 date: '2024-02-15',
//                 type: 'service',
//                 description: 'Oil and filter change',
//                 mileage: 72000,
//                 cost: 120.0,
//                 workshop: 'AutoPiù Workshop',
//             },
//             // ...
//         ],

//         payments: [
//             {
//                 id: 'p001',
//                 date: '2024-03-01',
//                 amount: 200.0,
//                 description: 'Car insurance RCA',
//                 method: 'credit card', // or 'bank transfer', 'cash'
//                 category: 'insurance',
//             },
//             // ...
//         ],

//         insurance: {
//             company: 'Genertel',
//             policyNumber: 'POL12345678',
//             startDate: '2024-01-01',
//             endDate: '2025-01-01',
//             amount: 450.0,
//         },

//         inspection: {
//             last: '2023-07-10',
//             next: '2025-07-10',
//         },

//         notes: 'Vehicle used for business purposes.',
//     },
//     // other vehicles...
// ];

export default function HomePage() {
    return (
        <>
            <h1 className="text-center font-bold text-4xl py-4">Il mio garage</h1>

            <div>
                {
                    vehicles.map((v, index) => {
                        const { brand, model } = v;

                        return (
                            <div key={index}>
                                <h3>{brand} {model}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
} 