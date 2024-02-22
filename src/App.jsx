import { useState, React, lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
const Title = lazy(() => import("./components/Title"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route
            path="/Dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
