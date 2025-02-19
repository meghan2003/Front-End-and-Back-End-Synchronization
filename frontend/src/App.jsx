import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    const [jokes, setJokes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("📡 Fetching jokes...");
        fetch("http://localhost:3000/api/jokes")
            .then(response => {
                console.log("🟢 Response received:", response);
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${response.status}');
                }
                return response.json();
            })
            .then(data => {
                console.log("✅ Jokes fetched:", data);
                setJokes(data);
            })
            .catch(error => {
                console.error("❌ Error fetching jokes:", error);
                setError(error.message);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-400 mb-2">Frontend & Backend Synchronization </h1>
                <h1 className="text-4xl font-bold text-blue-350 mb-1">😂 Laugh Hub: Your Daily Dose of Jokes! 🎭  </h1>
                <p className="text-lg text-gray-300 mb-6">Total Jokes: {jokes.length}</p>
                
                {error && (
                    <div className="bg-red-500 text-white p-3 rounded-md shadow-md">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {jokes.map((joke) => (
                        <div 
                            key={joke.id} 
                            className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold text-blue-300">{joke.title}</h3>
                            <p className="text-gray-400 mt-2">{joke.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;