import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
const handleClick = () => {
    console.log('Thanks for clicking!')
  };
  
function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <nav className ='comp nav' >
        <ul>
            <li>
                <a href= '/movies'>Anchor</a>
            </li>
            
          <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName='purple' exact to='/' onClick={handleClick}>Home</NavLink>
          </li>
            <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName='purple' to='/Movies' onClick={handleClick}>Movies</NavLink>
          </li>
            <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName='purple' to='/Stocks' onClick={handleClick}>Stocks</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/not-logged-in'>
  <h1> You Must Be Logged In To Enter.</h1>
</Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;