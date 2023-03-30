import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logo" element={<Logo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
