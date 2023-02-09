import "./App.css";
import { ReviewsPage } from "./components/ReviewsPage";
import { ReviewPage } from "./components/ReviewPage";
import { HomePage } from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/reviews/:review_id" element={<ReviewPage />}></Route>
        <Route path="/category/:category" element={<ReviewsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
