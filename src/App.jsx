import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import Routes from "./routes/index";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <Router>
      <ToastContainer />
        <Header />
        <Routes />
        <GlobalStyles />
    </Router>
  )
}

export default App
