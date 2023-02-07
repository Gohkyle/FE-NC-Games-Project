import "./App.css";
import { ReviewsPage } from "./components/ReviewsPage";
import { ReviewPage } from "./components/ReviewPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/reviews/:review_id" element={<ReviewPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
