import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>Content</main>
      <Footer/>
    </div>
  );
}

export default App;
