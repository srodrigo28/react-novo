import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import Routes from "./routes/index";

function App() {


  return (
    <Router>
        <Header />
        <Routes />
        <GlobalStyles />
    </Router>
  )
}

export default App
