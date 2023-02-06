import "./App.css";
import { ReviewsPage } from "./components/ReviewsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
