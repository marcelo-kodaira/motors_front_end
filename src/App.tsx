import { useEffect } from "react";
import { MainRoutes } from "./routes";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return <MainRoutes />;
}

export default App;
