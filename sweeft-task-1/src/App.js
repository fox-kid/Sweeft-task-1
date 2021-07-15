import { AppContextProvider } from "./context";
import Routes from "./Routes";

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
