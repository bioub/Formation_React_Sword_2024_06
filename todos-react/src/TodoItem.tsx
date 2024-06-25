import TodoSpanValue from "./TodoSpanValue";


function TodoItem() {
  
  return (
    <div className="TodoItem" data-todo-id="123">
      <input type="checkbox" checked={test} />
      <TodoSpanValue />
      <button>-</button>
    </div>
  );
}

export default TodoItem;