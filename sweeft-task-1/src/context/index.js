import { createContext, useContext, useState } from "react";
import ERRORS from "../constants/errors";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [count, setCount] = useState([]);

  return (
    <AppContext.Provider
      value={{
        category,
        difficulty,
        setCategory,
        setDifficulty,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    return new Error(ERRORS.APP_CONTEXT_INVALID);
  }
  return context;
}

export { useAppContext, AppContextProvider };
