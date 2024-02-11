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
import SerMainPage from "./Pages/Services/SerFireHydrant/SerMainPage";
import SerAlrmMainPag from "./Pages/Services/SerFireAlarm/SerAlrmMainPag";
import SerThirdMainPage from "./Pages/Services/SerThirdComp/SerThirdMainPage";
import SerFourthMainPage from "./Pages/Services/SerFourthComp/SerFourthMainPage";
import ContMainPage from "./Pages/ContactUS/ContMainPage";

function App() {
  return (  
    <Router>
      <Header/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<AboutUS/>}/>
    <Route path='/fireExtinguisher' element={<Product/>}/>
    <Route path='/firehydrants' element={<FireHydrants/>}/>
    <Route path='/firealarms' element={<Product/>}/>
    <Route path='/AddressableFireSystem' element={<MainPage/>}/>
    <Route path='/ConventionalMainpage' element={<ConvMainpage/>}/>
    <Route path='/PersonalProtective' element={<PersMainPage/>}/>
    <Route path='/FireHydrantProjects' element={<SerMainPage/>}/>
    <Route path='/FireAlarm' element={<SerAlrmMainPag/>}/>
    <Route path='/FireFightingTraining' element={<SerThirdMainPage/>}/>
    <Route path='/FireAidTraining' element={<SerFourthMainPage/>}/>
    <Route path='/ContactUs' element={<ContMainPage/>}/>
    </Routes>
    <MainFooter/>
    </Router>
  
  );
}

export default App;
