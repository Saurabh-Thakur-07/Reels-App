import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
