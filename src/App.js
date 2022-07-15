import { StrictMode, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// const Details = lazy(() => import("./Details"));
// const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <header className="w-full mb-4 text-center p-4 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
          <Link to="/" className="text-4xl text-white hover:text-gray-200">
            Adopt Me!
          </Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// render(<App />, document.getElementById("root"));
export default App;
