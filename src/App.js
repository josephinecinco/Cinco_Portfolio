import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import PersonalInfo from "./pages/PersonalInfo";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
