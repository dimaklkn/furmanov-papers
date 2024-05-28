import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import components
import Layout from "./components/Layout";

//import pages
import Home from "./pages/Home";
import Person from "./pages/Person";
import Object from "./pages/Object";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/objects/:id" element={<Object />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
