import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Todos from './Todos';
import About from './About';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { newTodoReducer, todosReducer } from './store/reducers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'todos',
        element: <Todos />,
      },
      {
        path: 'about/:name',
        element: <About />,
      },
    ],
  },
]);

const store = configureStore({
  reducer: {
    todos: todosReducer,
    newTodo: newTodoReducer,
  }
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
