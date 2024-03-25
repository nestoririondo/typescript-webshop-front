import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuth.tsx";
import { BasketProvider } from "./context/useBasket.tsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </AuthProvider>
  </BrowserRouter>
);
