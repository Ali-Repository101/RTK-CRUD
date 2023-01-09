import "./App.css"
import CsBanner from "./Components/Form/Banner";
import PostForm from "./Components/Form/postForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarSection from "./NavbarSection";
import UserTable from "./Components/Users-Table/UserTable";
import AboutPage from "./Components/Pages/About";
const App = () => {
return(
  <>
      <BrowserRouter> 
  <NavbarSection/>
    <Routes>
      <Route path="/" element={<PostForm/>}/>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="csbanner" element={<CsBanner/>}/>
      <Route path="tableData" element={<UserTable/>}/>
    </Routes>
  </BrowserRouter>
  </>
)
};

export default App;
