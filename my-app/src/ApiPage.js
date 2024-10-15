import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiPage() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10); // Default limit

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  const fetchData = async (limit) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/data?limit=${limit}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>API Data</h1>
      <div>
        <label>Show: </label>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiPage;
