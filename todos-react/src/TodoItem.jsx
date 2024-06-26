import TodoSpanValue from './TodoSpanValue';
import TodoInputValue from './TodoInputValue';

function TodoItem({ todo, isEditing = false }) {
  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input type="checkbox" checked={todo.completed} />
      {isEditing ? (
        <TodoInputValue title={todo.title} />
      ) : (
        <TodoSpanValue title={todo.title} />
      )}
      <button>-</button>
    </div>
  );
}

export default TodoItem;
