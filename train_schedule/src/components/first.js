import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const first = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get(
        'http://20.244.56.144/train/schedules/all'
      );
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  return (
    <div>
      <h2>All Trains Schedule</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default first;
