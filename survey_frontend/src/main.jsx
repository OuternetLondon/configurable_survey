import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Select_metaphor from "./pages/Select_metaphor.jsx";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Select_metaphor />
    </Provider>
  </StrictMode>
);
