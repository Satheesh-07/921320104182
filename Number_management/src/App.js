import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    const urls = [
      'http://20.244.56.144/numbers/primes',
      'http://20.244.56.144/numbers/fibo',
      'http://20.244.56.144/numbers/odd'
    ];

    try {
      const response = await axios.get('http://localhost:8008/numbers', {
        params: { url: urls }
      });

      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Number Management Service</h1>
      </header>
      <main className="main">
        <button className="fetch-button" onClick={handleFetchNumbers}>
          Fetch Numbers
        </button>
        {numbers.length > 0 && (
          <div className="numbers-list">
            <h2>Merged and Sorted Unique Numbers</h2>
            <ul>
              {numbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
