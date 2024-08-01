import ReactDOM from "react-dom/client";

import Global_styles from "./theme/global_styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global_styles />
    <App />
  </>
);
