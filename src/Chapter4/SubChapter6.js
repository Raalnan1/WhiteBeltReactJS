import React, { useState, useEffect } from 'react';

function SubChapter6() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      // This is just a mock of an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ message: 'Hello from useEffect!' }), 1000)
      );
      setData(response.message);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Details about "Working with useEffect".</p>
      <div>
        {loading ? <div className="spinner"></div> : <div>Data: {data}</div>}
      </div>
    </div>
  );
}

export default SubChapter6;
