
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

import { store } from "../src/Redux/store.jsx";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);