import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthenticationPage } from "./views/AuthenticationPage/AuthenticationPage";
import { Home } from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthenticationPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
