import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import {Footer} from "./components/footer/Footer"
import Productlist from "./components/productlist/Productlist";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Productlist/>
      <Footer/>
    </div>
  );
}

export default App;
