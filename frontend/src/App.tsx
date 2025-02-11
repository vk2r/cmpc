import { Provider } from "react-redux";
import { store } from "./providers/store";

// Pages
import Home from "./components/pages/home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
