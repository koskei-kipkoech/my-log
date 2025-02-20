import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import General from './pages/general/General';
import MultiStepForm from './pages/rateus/MultiStepForm';
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general" element={<General />} />
        <Route path="/contact" element={user ? <Contact /> : <Login/>} />
        <Route path="/multiform" element={< MultiStepForm/>} />
        <Route path="/about" element={<About />} />
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
