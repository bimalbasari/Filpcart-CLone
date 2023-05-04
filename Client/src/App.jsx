
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Signin from "./components/container/Signin/Signin";
import Signup from "./components/container/Signup/Signup";
import Home from "./components/container/Home/Home";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin"  element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
