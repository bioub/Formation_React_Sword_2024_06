import { createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, setAllTodos, toggleCompletedAllTodos, updateEditingId, updateNewTodo } from './actions.js';

const initialState = {
  todos: [
    { id: 1, title: 'ABC', completed: false },
    { id: 2, title: 'DEF', completed: true },
    { id: 3, title: 'HIJ', completed: false },
  ],
  newTodo: 'ABC',
  editingId: -1,
};

// export function todosReducer(state = initialState.todos, action) {
//   switch (action.type) {
//     case addTodo.type:
//       return [
//         ...state,
//         action.payload
//       ];
//     default:
//       return state;
//   }
// }

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload)
    })
    .addCase(setAllTodos, (state, action) => {
      return action.payload;
    })
    .addCase(toggleCompletedAllTodos, (state, action) => {
      for (const todo of state) {
        todo.completed = action.payload;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      state.splice(index, 1);
    })
    .addCase(editTodo, (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      state[index] = action.payload;
    })
  
  ;

  // avec immer
  // state[1].completed = true;

  // sans immer
  // return [
  //   ...state.slice(0, 1),
  //   {
  //     ...state[1],
  //     completed: true,
  //   },
  //   ...state.slice(2),
  // ]
});

export const newTodoReducer = createReducer(initialState.newTodo, (builder) => {
  builder.addCase(updateNewTodo, (state, action) => {
    // avec return pas de immer (sans return => immer)
    return action.payload;
  }).addCase(addTodo, (state, action) => {
    return '';
  });
})



export const editingIdReducer = createReducer(initialState.editingId, (builder) => {
  builder.addCase(updateEditingId, (state, action) => {
    // avec return pas de immer (sans return => immer)
    return action.payload;
  })
})
