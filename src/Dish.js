
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Table from './Component/Table/Table';
import './Component/recipe.css'
import {FaGrinHearts} from 'react-icons/fa';
import {SiCoffeescript} from 'react-icons/si'
import Footer from './Component/HeaderFooter/Footer';
import Navbar from './Component/HeaderFooter/Navbar';

function Dish() {
    let [Dish, setDish] = useState([]);
    let { name } = useParams();
    let ingredient = [],ingredientfil, measuresfil;
    let measures = [];
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
        let rec = fetch(url);
        rec.then((response) => {
            return response.json();
        }).then((Dish) => {
            setDish(Dish.meals);
        }).catch((error) => { console.log(error); })
        // eslint-disable-next-line 
    }, []);
    if (Dish.length > 0) {
        for (let i = 1; i <= 20; i++) {
            if (Dish[0][`strIngredient${i}`] !== null || Dish[0][`strIngredient${i}`] !==undefined) {
                ingredient.push(Dish[0][`strIngredient${i}`]);
            }
  ingredientfil=  ingredient.filter((val)=>{return val!==null && val!==undefined && val!==""})
        }
        for (let i = 1; i <= 20; i++) {
            if (Dish[0][`strMeasure${i}`] !== null || Dish[0][`strMeasure${i}`] !== undefined) {
                measures.push(Dish[0][`strMeasure${i}`]);
            }
             measuresfil=  measures.filter((val)=>{return val!==null && val!==undefined && val!==""})
        }
       
    }
    return (<><Navbar/>
        {
            Dish.length > 0 ? (<>{
                Dish.map((val) => {
                    return (<div className='recipeContainer'>
                        <h1 className='heading'><FaGrinHearts style={{color:"blue",marginRight:"12px"}}/>{val.strMeal}<FaGrinHearts style={{color:"red",marginLeft:"12px"}}/></h1>
                        <img className='pic' src={val.strMealThumb} alt="yummies"/>
                        <div className='innerinfo'>
                        <h1 className='cook'>How to Cook <SiCoffeescript style={{color:"red"}}/></h1>
                            <p className='instruction'>{val.strInstructions}</p>
                            <Table ingredient={ingredientfil} measures={measuresfil} />
                        </div>
                    </div>)
                })
            }</>) : (<>Page Not Found</>)
        }
        <Footer/>
    </>)
}
export default Dish;