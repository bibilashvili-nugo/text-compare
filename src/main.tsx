import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TextCompareProvider } from "./components/context/TextCompareContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TextCompareProvider>
      <App />
    </TextCompareProvider>
  </StrictMode>
);
