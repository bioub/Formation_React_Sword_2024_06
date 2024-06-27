import { Link, Outlet } from "react-router-dom";

function Layout() {
  
  return (
    <div className="Layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/about/react">About React</Link>
        <Link to="/about/react-router">About React Router</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;