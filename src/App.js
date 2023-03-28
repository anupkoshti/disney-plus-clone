import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route element={<Home />} path="/home" />
          <Route element={<Detail />} path='/detail/:id' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
