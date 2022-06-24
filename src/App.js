import './App.css';
import {Switch,Route}from 'react-router-dom'
import Home from './Home'
import Recipe from './Component/Recipe';
import Dish from './Dish';
function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/" component={Home} exact></Route>
       <Route path="/recipe/:id" component={Recipe}></Route>
       <Route path="/dish/:name" component={Dish}></Route> 
     </Switch>
    </div>
  );
}
export default App;
