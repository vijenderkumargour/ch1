//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

function App() {
  let isLogged = true;
  let data={
    'st':'user not login'
  }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1 >Hello React</h1>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:category' element={<Product />} />
            <Route path='/product/:category/:id' element={<Product />} />
            <Route path='/*' element={<h2>This is 404 Error Page!</h2>} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Navigate to="/login" replace state={data}/>} />


          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
