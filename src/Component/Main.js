import './main.css';
import { FaSearch } from 'react-icons/fa';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownCategory from './DropdownCategory'

function Main(prop) {
    let [dishName, setName] = useState("");
    function isupdate(val) {
        prop.fun(val);
    }
    function ChangeHandler(event) {
        setName(event.target.value);
    }

    let [Category, setCategory] = useState([]);
    useEffect(() => {
        let Categories = fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        Categories.then((response) => {
            return response.json()
        }).then((data) => {
            setCategory(data.meals);
        })
    }, []);


    return (<Fragment >
        <form id="maincontainer">
            <fieldset>
                <legend id="display">Yummies are Ready</legend>
                <input type="text" placeholder='Enter your dish Name' id="dish" value={dishName} onChange={ChangeHandler} />
                <button type='button' id="searchbtn"><FaSearch className='search' /> <Link to={`/dish/${dishName}`} style={{color:"white",textDecoration:"none"}}>Search</Link></button>
            </fieldset>
            <DropdownCategory cat={Category} fun={isupdate} />
        </form>
    </Fragment>)
}
export default Main;