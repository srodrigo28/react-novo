import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import Routes from "./routes/index";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
import store from "./services/store";

function App() {


  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
          <Header />
          <Routes />
          <GlobalStyles />
      </Router>
    </Provider>
  )
}

export default App
