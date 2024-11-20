import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/settings" element={user ? <Setting /> : <Register/> } />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<h1 style={{color:'teal'}}>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
