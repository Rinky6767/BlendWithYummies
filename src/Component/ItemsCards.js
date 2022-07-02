import { useEffect, useState } from 'react';
import {FaRegFrown} from 'react-icons/fa';
import './itemcards.css';
import ItemCard from './ItemCard';
import {NameContext} from 'Context/Name.js';

function ItemCards(prop) {
    let proName= prop.name;
    let [parC, setPar] = useState("None");
    let [data,setData]=useState([]);
    if (proName !== "None" && proName !== parC) {
        setPar(proName);
    }
    useEffect(() => {
        if (proName !== "None") {
            let url= `https://www.themealdb.com/api/json/v1/1/filter.php?c=${parC}`;
            let catC = fetch(url);
            catC.then((response) => {
                return response.json();
            }).then((data) => {
                setData(data.meals);
            })
        }
       // eslint-disable-next-line 
    }, [parC]);

    return (
      <NameContext.Provider value={data}>
      <div id="ItemCardsWrapper">
        {
            parC === "None" ? (<><h1 className='nodis'>Nothing to Display<FaRegFrown className='face' style={{color:"blue"}}/></h1></>) : (<ItemCard/>)
        }
    </div>
    </NameContext.Provider>
     )

}
export default ItemCards;
