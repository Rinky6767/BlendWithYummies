import './item.css'
import { Link } from 'react-router-dom';
import { FaRegFrown } from 'react-icons/fa';

function ItemCard(prop){
    return(
<ul className="wrapperitems" >
    {
       prop.list!==null?(prop.list.map((val)=>{
        return( <>
        <li className="itemcontainer" key={val.idMeal}>
          <h1 className="headingmain">{val.strMeal}</h1>
          <img src={val.strMealThumb} className="picmain" alt="yummy"/>
          <button data-id={val.idMeal}className="ingbtn" ><Link style={{color:"white",textDecoration:"none"}} to={`/recipe/${val.idMeal}`}>Ingredient</Link></button>
          </li>
          </>) 
      })):(<><h1 className='nodis'>Nothing to display<FaRegFrown className='face' style={{ color: "blue" }} /></h1></>)
       
    }
    </ul>
    )

}
export default ItemCard;
