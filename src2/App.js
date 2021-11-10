import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import MainNavbar from "./component/MainNavbar";
import Axiocs from "./component/Axioce";
import Urlaxios from "./component/Urlaxios";

import DogAPI from './component/DogAPI'


// importy todo listaka
// import TodoListt from "./task2/TodoListt";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/axiocs" element={<Axiocs />} />
          <Route path="/urlaxios" element={<Urlaxios />} />
          <Route path="/dogapi" element={<DogAPI />} />

          
        </Routes>
      </BrowserRouter>

      {/* <TodoListt /> */}
    </div>
  );
}

export default App;
// https://reactrouter.com/docs/en/v6/getting-started/overview
// linli roter reacta
// navlink lagal ruter reacta
