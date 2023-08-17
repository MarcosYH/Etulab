import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Accueil from "./pages/Accueil";
import Solution from "./pages/Solution";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/solution" element={<Solution/>} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
