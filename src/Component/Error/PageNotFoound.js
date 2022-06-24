import './page.css';
import {FaPizzaSlice} from 'react-icons/fa'
function PageNotFound(){
    return(<div className='pageContainer'>
    <h1 className='sry'>Sorry, Page Not Found:( For your Dish</h1>
    <h1 className='sry'>Please Search with correct name </h1>
    <h1 className='sry'>Like: Pizza <FaPizzaSlice />  </h1>
    </div>)
}
export default PageNotFound;