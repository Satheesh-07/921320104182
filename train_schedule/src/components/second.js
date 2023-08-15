import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const second = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetchTrain();
  }, []);

  const fetchTrain = async () => {
    try {
      const response = await axios.get(
        `http://20.244.56.144/train/schedules/${trainId}`
      );
      setTrain(response.data);
    } catch (error) {
      console.error('Error fetching train:', error);
    }
  };

  return (
    <div>
      <h2>Single Train Schedule</h2>
      {train && (
        <div>
          <p>Train: {train.name}</p>
          <p>Departure: {train.departure}</p>
          <p>Price: {train.price}</p>
          {/* Display other train details */}
        </div>
      )}
    </div>
  );
};

export default second;
