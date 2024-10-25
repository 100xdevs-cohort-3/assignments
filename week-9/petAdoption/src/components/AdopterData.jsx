// src/components/Table.js
import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ data }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Submitted Applications</h2>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">Pet Name</th>
                        <th className="border border-gray-300 p-2">Breed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{entry.name}</td>
                            <td className="border border-gray-300 p-2">{entry.email}</td>
                            <td className="border border-gray-300 p-2">{entry.phone}</td>
                            <td className="border border-gray-300 p-2">{entry.petName}</td>
                            <td className="border border-gray-300 p-2">{entry.breed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/" className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Go Back to Form</Link>
        </div>
    );
};

export default Table;