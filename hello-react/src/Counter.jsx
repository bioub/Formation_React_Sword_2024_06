import { useState } from "react";

function Counter() {
  const [counterObj, setCounterObj] = useState({ count: 0 })

  function clickHandler() {
    setCounterObj({ ...counterObj, count: counterObj.count + 1 });
    // setArray([newValue, ...array])
  }

  return (
    <button onClick={clickHandler}>
      count is {counterObj.count}
    </button>
  );
}

export default Counter;