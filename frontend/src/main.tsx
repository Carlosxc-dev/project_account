import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./global/context/msg";

import Global_styles from "./global/styles/global_styles";
import App from "./global/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global_styles />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
