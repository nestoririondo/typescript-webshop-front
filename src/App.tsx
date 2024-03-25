import { Routes, Route } from "react-router-dom";
import { routes, RouteObject } from "./routes/routes";
import NavBar from "./components/NavBar";
import "./styles/app.css";

function App() {
  return (
    <>
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
