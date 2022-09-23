
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/Login';
import AdminPage from './Pages/AdminPage/AdminPage';
import UserManagement from './Pages/AdminPage/Management/Users/UserManagement';
import Dashboard from './Pages/AdminPage/Management/Dashboards/Dashboard';
import Hotels from './Pages/AdminPage/Management/Hotels/Hotels';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="admin" element={<AdminPage />} >
          <Route index element={<Dashboard />}></Route>
          <Route path='users-management' element={<UserManagement />}></Route>
          <Route path='hotels-management' element={<Hotels />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
