// Import libraries.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components.
import GlobalStyles from "./GlobalStyles";
import Home from "../pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
