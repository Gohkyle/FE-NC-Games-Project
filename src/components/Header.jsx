import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <header>
      <h1>Super Amazing Games Review</h1>
      <NavBar />
    </header>
  );
};
