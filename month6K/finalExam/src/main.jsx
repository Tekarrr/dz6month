import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import App from "./app/App.jsx";
import QueryProvider from "./app/providers/QueryProvider.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
