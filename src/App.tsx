import { useEffect } from "react";
import "./App.scss";
import MainRoutes from "./routes/MainRoutes";
import { checkFixLang, editTitle } from "./helpers/lang";
import i18n from "./locales/i18n";

function App() {
  // Change language
  const lang = i18n.language;
  useEffect(() => {
    checkFixLang(lang);
    editTitle(lang);
  }, [lang]);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
