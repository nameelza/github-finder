import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Notfound from "./components/Notfound";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
