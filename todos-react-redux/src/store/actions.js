import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO', (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});

export const updateNewTodo = createAction('UPDATE_NEW_TODO');
export const setAllTodos = createAction('SET_ALL_TODOS')
export const toggleCompletedAllTodos = createAction('TOGGLE_COMPLETED_ALL_TODOS')
export const deleteTodo = createAction('DELETE_TODO')
export const editTodo = createAction('EDIT_TODO')

export const updateEditingId = createAction('UPDATE_EDITING_ID');
