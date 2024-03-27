import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { BasketProvider } from "./context/useBasket";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </AuthProvider>
  </BrowserRouter>
);
