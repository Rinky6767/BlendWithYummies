import './item.css'
import { Link } from 'react-router-dom';
import PageNotFound from "./Error/PageNotFoound";
import {NameContext} from './Context/Name';
import {useContext} from "react";
function ItemCard(prop){
    //let list= useContext(NameContext);
    return(
    <ul className="wrapperitems">
    {
       prop.list!==null?(prop.list.map((val)=>{
        return( <>
        <li className="itemcontainer" key={val.idMeal}>
          <h1 className="headingmain">{val.strMeal}</h1>
          <img src={val.strMealThumb} className="picmain" alt="yummy"/>
          <button data-id={val.idMeal}className="ingbtn" ><Link style={{color:"white",textDecoration:"none"}} to={`/recipe/${val.idMeal}`}>Ingredient</Link></button>
          </li>
          </>) 
      })):(<PageNotFound/>)
       
    }
    </ul>)
}
export default ItemCard;
