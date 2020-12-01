import logo from './logo.svg';
import './App.css';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Routes from './config/Routes';

function App() {
  return (
    <HashRouter>
      <Switch>
        {
          Routes.Routes.map(
            (item, index) => <Route key={index.toString()} path={item.path} name={item.name} component={item.component} />
          )
        }
        <Redirect exact from='*' to='/home' />
      </Switch>
    </HashRouter>
  );
}

export default App;
