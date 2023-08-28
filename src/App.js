import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Loader.css";
import Accueil from "./pages/Accueil";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Login from "./components/Authentification/Login";
import Registers from "./components/Authentification/Register";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Forgetpassword from "./components/Authentification/Forgetpassword";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {/* <Navbar /> */}
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registers />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
