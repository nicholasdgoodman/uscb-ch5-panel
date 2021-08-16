import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PanelLayout from './components/PanelLayout';
import XPanelLayout from './components/XPanelLayout';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  }
});

const App = () =>
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={PanelLayout} exact />
        <Route path="/xpanel" component={XPanelLayout} />
      </Switch>

    </ThemeProvider>
  </BrowserRouter>
;

export default App;