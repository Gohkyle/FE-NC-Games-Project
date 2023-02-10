import "./App.css";
import { ReviewsPage } from "./components/PageReviews";
import { ReviewPage } from "./components/PageReview";
import { HomePage } from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./components/PageError";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/reviews" element={<PageReviews />}></Route>
        <Route path="/reviews/:review_id" element={<PageReview />}></Route>
        <Route path="/reviews/add" element= {AddReviewPage/>}></Route>
        <Route path="/category/:category" element={<PageReviews />}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
    </div>
  );
}

export default App;
