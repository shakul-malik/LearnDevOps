import React ,{useEffect, useState } from 'react';

function App() {
  const [count, setCount]= useState(0);
  useEffect(() => {
    const intervalId= setInterval(() =>
    {
      setCount( count+1);
    },1000);
    return () => clearInterval(intervalId)
  },[]);
  return (
    <div className="App">
      <h3> count : {count}</h3>
    </div>
  );
}

export default App;
