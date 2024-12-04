import React, { useState } from 'react';

import Button from '../Button/Button';

const Home = () => {
  const [valueOfCount, setCount] = useState(0);

  const changeCount = (action) => {
    if (action === "Increment") {
      setCount((prev) => prev + 1);
    } else if (action === "Decrement") {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h4>{`Count: ${valueOfCount}`}</h4>
      <Button name="Increment" changeValue={changeCount} />
      <Button name="Decrement" changeValue={changeCount} />
    </div>
  );
};

export default Home;
