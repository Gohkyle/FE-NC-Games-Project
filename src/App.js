import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PageReviews } from "./components/PageReviews";
import { PageReview } from "./components/PageReview";
import { PageHome } from "./components/PageHome";
import { PageError } from "./components/PageError";
import { PageAddReview } from "./components/PageAddReview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/reviews" element={<PageReviews />}></Route>
        <Route path="/reviews/:review_id" element={<PageReview />}></Route>
        <Route path="/reviews/add" element={<PageAddReview />}></Route>
        <Route path="/category/:category" element={<PageReviews />}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
    </div>
  );
}

export default App;
