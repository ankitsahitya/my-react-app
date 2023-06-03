import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Users from './components/users';
import NewUser from './components/users/new';
import ShowUser from './components/users/show';
import LoginUser from './components/users/login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/new",
      element: <NewUser />,
    },
    {
      path: "/:id",
      element: <ShowUser />,
    },
    {
      path: "/login",
      element: <LoginUser />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
