import "./App.css";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <div className=''>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  </div>
  );
}


export default App;
