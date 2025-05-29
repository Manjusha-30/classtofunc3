import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Log once when the component mounts
  useEffect(() => {
    console.log('Counter mounted');
  }, []);

  // Log every time the count value updates
  useEffect(() => {
    console.log('Counter updated');
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
