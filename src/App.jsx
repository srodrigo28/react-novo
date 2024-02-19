import { Header } from "./components/Header"
import { Login } from "./pages/Login"
import GlobalStyles from "./styles/GlobalStyles"
import Routes from "./routes"

function App() {


  return (
    <>
        <Header />
        <Routes />
        <GlobalStyles />
    </>
  )
}

export default App
