
function Counter({ count, onIncrement }) {
  

  function clickHandler() {
    onIncrement(count);
  }

  return (
    <button onClick={clickHandler}>
      count is {count}
    </button>
  );
}

export default Counter;