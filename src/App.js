import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import "./styles/Loader.css";
import Accueil from "./pages/Accueil";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Login from "./pages/Login";
import Registers from "./pages/Register";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Forgetpassword from "./pages/Forgetpassword";
import Dashboard from "./pages/Dashboard";
import { useCookies } from 'react-cookie';
import Cookies from "universal-cookie";
import Verify from "./pages/Verify";
import Creatnewpassword from "./pages/Creatnewpassword";

const cookies = new Cookies();
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


const [cookies] = useCookies(['TOKEN']);
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
            <Route path="/login"  element={cookies.TOKEN ? <Navigate to="/dashboard" /> : <Login /> }/>
            <Route path="/register" element={cookies.TOKEN ? <Navigate to="/dashboard" /> : <Registers /> } />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/check_email" element={<Verify />} />
            <Route path="/createnewpassword/:token" element={<Creatnewpassword/>} />
            <Route path="/dashboard" element={<Protecteddashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

// function for protect route dashboard
const Protecteddashboard = () => {
  const isAuthenticated = cookies.get("TOKEN");

  return isAuthenticated ? <Dashboard /> : <Navigate to="/" />;
};


export default App;
