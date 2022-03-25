import React, { useState } from "react";

const Watch = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hurrah I Have a smart watch</h1>
      <h3>Dourani : {count} </h3>
      <button onClick={increaseCount}>Doura abbay ahe ! ...</button>
    </div>
  );
};

export default Watch;
