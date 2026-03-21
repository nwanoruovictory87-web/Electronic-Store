import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OrderContext } from "./component/ContextApi/AppContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrderContext>
      <App />
    </OrderContext>
  </StrictMode>,
);
