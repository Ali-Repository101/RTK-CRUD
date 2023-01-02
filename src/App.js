import "./App.css"
import CsBanner from "./Components/Form/Banner";
import PostForm from "./Components/Form/postForm";

const App = () => {
  return <div className="App">
    <CsBanner/>
    <div style={{marginTop:"10%"}}>
  <PostForm/>
  </div>
  </div>;
};

export default App;
