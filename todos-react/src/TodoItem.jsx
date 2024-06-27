import TodoSpanValue from './TodoSpanValue';
import TodoInputValue from './TodoInputValue';

function TodoItem({ todo, isEditing = false, onDelete, onEdit, onEditingIdChange }) {
  function handleCheckboxClick(event) {
    onEdit({
      ...todo,
      completed: event.target.checked,
    })
  }

  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxClick} />
      {isEditing ? (
        <TodoInputValue todo={todo} onEditingIdChange={onEditingIdChange} onEdit={onEdit} />
      ) : (
        <TodoSpanValue todo={todo} onEditingIdChange={onEditingIdChange}  />
      )}
      <button onClick={() => onDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
