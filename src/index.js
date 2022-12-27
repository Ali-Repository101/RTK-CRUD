import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
//mdb boostrap configuartion
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <StrictMode>
        <App />
  </StrictMode>,
);
