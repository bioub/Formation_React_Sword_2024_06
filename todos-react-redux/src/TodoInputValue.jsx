import { useEffect, useRef } from 'react';

function TodoInputValue({ todo, onEditingIdChange, onEdit }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onEditingIdChange(-1);
    }
  }

  function handleChange(event) {
    onEdit({
      ...todo,
      title: event.target.value,
    });
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.select();
  }, []);

  useEffect(() => {
    const listener = (event) => {
      if (!inputRef.current.contains(event.target)) {
        onEditingIdChange(-1);
      }
    };
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, [onEditingIdChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      className="TodoInputValue"
      value={todo.title}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TodoInputValue;
