import "./App.css"
import { Banner } from "./Components/Form/Banner";
import PostForm from "./Components/Form/postForm";

const App = () => {
  return <div className="App">
    <Banner/>
    <div style={{marginTop:"10%"}}>
  <PostForm/>
  </div>
  </div>;
};

export default App;
