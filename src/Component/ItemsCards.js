import { useEffect, useState } from 'react';
import { FaRegFrown } from 'react-icons/fa';
import './itemcards.css';
import ItemCard from './ItemCard';

function ItemCards(prop) {
    let proName = prop.name;
    let [parC, setPar] = useState("None");
    let [data, setData] = useState([]);
    if (proName !== parC) {
        setPar(proName);
    }
    useEffect(() => {
        if (parC !== "None") {
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${parC}`;
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
        <>
            <h1 style={{ textAlign: "center", display: "block" }}>
                {sessionStorage.getItem("catname") !== "None" ? (<>{sessionStorage.getItem("catname")}</>) : (<></>)}</h1>
            <div id="ItemCardsWrapper">
                {
                    parC === "None" ? (<><h1 className='nodis'>Nothing to Display<FaRegFrown className='face' style={{ color: "blue" }} /></h1></>) : (<ItemCard list={data} />)
                }
            </div>
        </>
    )

}
export default ItemCards;
