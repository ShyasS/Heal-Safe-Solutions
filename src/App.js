import Index from "./Components/Swiper/Index";
import Header from "./Layout/Header/Header";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ThirdComp from "./Pages/Home/HomeAboutUs/ThirdComp";
import AboutUS from "./Pages/About/AboutUS";
import MainFooter from "./Layout/Footer/MainFooter";
import Product from "./Pages/Products/Product";
import FireHydrants from './Pages/Products/Components/FireHydrants/FireHydrants';
import MainPage from "./Pages/Products/Components/AddressableFireSystem/MainPage";
import ConvMainpage from "./Pages/Products/Components/ConventionalFireAlaram/ConvMainpage";
import PersMainPage from "./Pages/Products/Components/PersonalProtective/PersMainPage";

function App() {
  return (
    <Router>
        <Header/>
        {/* <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/aboutus' element={<AboutUS/>}/>
         <Route path='/product' element={<Product/>}/>
         </Routes> */}
          {/* <FireHydrants/> */}
          {/* <MainPage/> */}
          {/* <ConvMainpage/> */}
          <PersMainPage/>
         <MainFooter/>
    </Router>
  );
}

export default App;
