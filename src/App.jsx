import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Navbar} from "./components";
import AboutPage from "./Pages/AboutPage";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0' style={{background:"white"}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AboutPage/>}/>

        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
