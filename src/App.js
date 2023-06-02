import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Users from './components/users';
import NewUser from './components/users/new';
import { useState } from 'react';
import ShowUser from './components/users/show';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Users users={users} />}
          />
          <Route
            path="/new"
            element={<NewUser setUsers={setUsers} length={users.length} />}
          />
          <Route
            path="/:id"
            element={<ShowUser users={users} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
