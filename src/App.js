//import logo from './logo.svg';
//import './App.css';
import Nav from './Navbar';
import './styles.css';
import Footer from './footer';
import About from './pages/About';
import Grid from './pages/Grid';
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
        <Nav />
        <div className = "container">
            <Routes>
                <Route path="/" element={<Grid />} />
                <Route path="/program" element={<Grid />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
        <Footer />
    </>

  );
}

export default App;