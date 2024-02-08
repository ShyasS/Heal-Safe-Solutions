import Index from "./Components/Swiper/Index";
import Header from "./Layout/Header/Header";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ThirdComp from "./Pages/Home/HomeAboutUs/ThirdComp";
import AboutUS from "./Pages/About/AboutUS";

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/aboutus' element={<AboutUS/>}/>
         </Routes>
    </Router>
  );
}

export default App;
