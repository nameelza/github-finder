import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>Content</main>
    </div>
  );
}

export default App;
