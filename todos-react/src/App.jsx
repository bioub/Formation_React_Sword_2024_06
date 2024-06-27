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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
