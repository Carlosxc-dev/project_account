import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/msg";

import Global_styles from "./styles/global_styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global_styles />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
