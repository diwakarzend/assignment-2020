import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from "react-redux";
import { store } from "./store/index";
import router from "./router.js";

const muiTheme = createMuiTheme({
    
});

const App = props => <Provider store={store}>
  	<ThemeProvider theme={muiTheme}>
      {router}
    </ThemeProvider>
  </Provider>;

export default App;