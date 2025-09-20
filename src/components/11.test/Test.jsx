import React, { useState } from 'react';

const Test = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [score, setScore] = useState([]);

  const add = () => {
    let name = `item${count}`;
    setList(prev => [...prev, name]);
    setCount(prev => prev + 1);
  };

  const addScore = () => {
    const run = Math.floor(Math.random() * 6) + 1; // 1–6
    setScore(prev => [...prev, run]); // add to score list
  };

  return (
    <div>
      <h1>11. Test</h1>

      <div className="container">
        <div className="content">
          <h1>List item</h1>
          <button onClick={add}>Add Item</button>
          {list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="content">
          <h1>Score Card</h1>
          <div className="data">
            <h3>Runs: {score.join(", ")}</h3>
            <button onClick={addScore}>Hit a Bat</button>
            <h3>Total Score: {score.reduce((a, b) => a + b, 0)} runs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
