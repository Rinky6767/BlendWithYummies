import './App.css';
import {Route, Routes}from 'react-router-dom'
import Home from './Home'
import Recipe from './Component/Recipe';
import Dish from './Dish';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} exact></Route>
       <Route path="/recipe/:id" element={<Recipe/>}></Route>
       <Route path="/dish/:name" element={<Dish/>}></Route>
      </Routes>
    </div>
  );
}
export default App;



