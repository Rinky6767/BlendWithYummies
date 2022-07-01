import './main.css';
import { FaSearch } from 'react-icons/fa';
import { Fragment, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import DropdownCategory from './DropdownCategory'

function Main(prop) {
    let [dishName, setName] = useState("");
    const navigate = useNavigate();
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
                <button  id="searchbtn" onClick={(event)=>{event.preventDefault();
                  if(dishName.length>0){
                    navigate(`/dish/${dishName}`);
                  }
                }}><FaSearch className='search' />Search</button>
            </fieldset>
            <DropdownCategory cat={Category} fun={isupdate} />
        </form>
    </Fragment>)
}
export default Main;