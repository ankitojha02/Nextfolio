import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import StyleSwitcherProvider from "./context/StyleSwitcherContext";
import StyleSwitcher from "./components/StyleSwitcher";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import CustomTemplate from "./pages/CustomTemplate";
import ForgotPassword from "./pages/Forgot-Password";
import ResetPassword from "./pages/Reset-Password";
import CreatePortfolio from './pages/CreatePortfolio';
import Navbar from './components/Navbar';
import CustomTemplate1 from "./Templates/CustomTemplate1";
import CustomTemplate2 from "./Templates/CustomTemplate2";
import CustomTemplate3 from "./Templates/CustomTemplate3";
import CustomTemplate4 from "./Templates/CustomTemplate4";
import CustomTemplate5 from "./Templates/CustomTemplate5";
import CustomTemplate6 from "./Templates/CustomTemplate6";
import Covertemplate1 from "./Templates/Coverlettertemplate1";
import Covertemplate2 from "./Templates/Coverlettertemplate2";
import Covertemplate3 from "./Templates/Coverlettertemplate3";
import Covertemplate4 from "./Templates/Coverlettertemplate4";
import Covertemplate5 from "./Templates/Coverlettertemplate5";
function App() {
  return (
    <StyleSwitcherProvider>
    <Router>
      <div className="App">
        <Navbar />
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreatePortfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> 
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/custom" element={<CustomTemplate />} />
            <Route path="/customtemplate1" element={<CustomTemplate1 />} />
            <Route path="/customtemplate2" element={<CustomTemplate2 />} />
            <Route path="/customtemplate3" element={<CustomTemplate3 />} />
            <Route path="/customtemplate4" element={<CustomTemplate4 />} />
            <Route path="/customtemplate5" element={<CustomTemplate5 />} />
            <Route path="/customtemplate6" element={<CustomTemplate6 />} />

            <Route path="/coverlettertemplate1" element={<Covertemplate1 />} />
            <Route path="/coverlettertemplate2" element={<Covertemplate2 />} />
            <Route path="/coverlettertemplate3" element={<Covertemplate3 />} />
            <Route path="/coverlettertemplate4" element={<Covertemplate4 />} />
            <Route path="/coverlettertemplate5" element={<Covertemplate5 />} />
          </Routes>
        </main>
        <StyleSwitcher />
      </div>
    </Router>
    </StyleSwitcherProvider>
  );
}

export default App;
