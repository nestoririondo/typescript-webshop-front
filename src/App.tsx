import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import "./styles/app.css";

interface RouteObject {
  path: string;
  element: React.ElementType;
  index?: boolean;
}

function App() {
  return (
    <>    
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
