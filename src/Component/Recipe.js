import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { FaGrinHearts } from 'react-icons/fa';
import { SiCoffeescript } from 'react-icons/si'
import Table from './Table/Table.js';
import Footer from './HeaderFooter/Footer.js';
import Navbar from './HeaderFooter/Navbar.js';
import Spinner from '../Loading/Spinner.js';
import './recipe.css'
import ReactPlayer from 'react-player/youtube';

function Recipe() {
    let [data, setData] = useState([]);
    let { id } = useParams();
    let ingredient = [], ingredientfil, measuresfil;
    let measures = [];
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        let rec = fetch(url);
        rec.then((response) => {
            return response.json();
        }).then((data) => {
            setData(data.meals);
        }).catch((error) => { console.log(error); })
        // eslint-disable-next-line 
    }, []);
    if (data.length > 0) {

        for (let i = 1; i <= 20; i++) {
            if (data[0][`strIngredient${i}`] !== null || data[0][`strIngredient${i}`] !== undefined) {
                ingredient.push(data[0][`strIngredient${i}`]);
            }
            ingredientfil = ingredient.filter((val) => { return val !== null && val !== undefined && val !== "" })
        }
        for (let i = 1; i <= 20; i++) {
            if (data[0][`strMeasure${i}`] !== null || data[0][`strMeasure${i}`] !== undefined) {
                measures.push(data[0][`strMeasure${i}`]);
            }
            measuresfil = measures.filter((val) => { return val !== null && val !== undefined && val !== "" })
        }

    }
    return (<><Navbar />
        {
            data.length > 0 ? (<>{
                data.map((val) => {
                    return (<div className='recipeContainer'>
                        <h1 className='heading'><FaGrinHearts style={{ color: "blue", marginRight: "12px" }} />{val.strMeal}<FaGrinHearts style={{ color: "red", marginLeft: "12px" }} /></h1>
                        <img className='pic' src={val.strMealThumb} alt="yummies" />
                        <div className='innerinfo'>
                            <h1 className='cook'>How to Cook <SiCoffeescript style={{ color: "red" }} /></h1>
                            <p className='instruction'>{val.strInstructions}</p>
                            <Table ingredient={ingredientfil} measures={measuresfil} />
                        </div>
                            <ReactPlayer
                               url={val.strYoutube}
                               className="react-player"
                               width="90%"
                               height="300px"
                                controls="true"
                                style={{ marginBottom: "10px" }}
                            />
                    </div>)
                })
            }</>) : (<Spinner />)
        }
        <Footer />
    </>)
}
export default Recipe;
