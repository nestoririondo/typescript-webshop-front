import { Routes, Route } from "react-router-dom";
import { routes, RouteObject } from "./routes/routes";
import TopBanner from "./components/TopBanner";
import NavBar from "./components/NavBar/NavBar";
import "./styles/app.css";

function App() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <Routes>
        {routes.map((route: RouteObject, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
            index={route.index}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
