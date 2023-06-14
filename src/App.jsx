import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UsersTable from './components/UsersTable/UsersTable';
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersTable />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="*" element={<h1>Not page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
