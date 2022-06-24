import './DropDownCat.css';
import { useState} from 'react';

function DropdownCategory(prop) {
   let [show, setShow] = useState("None");

   function clickHandler(event) {
         
         setShow(event.target.value);
         prop.fun(show);
   }
   console.log("show: "+show);
   return (<>
      <div className='Listconatiner1'>
         <label id="head">Select a Category</label>
         <select id="drop" onChange={clickHandler} value={show} onClick={clickHandler}><option value="None" >None</option>
            {
               prop.cat.map((val, index) => {
                  return <option key={index} value={val.strCategory} className="options" onClick={clickHandler} onTouchEnd={clickHandler}>{val.strCategory}</option>
               })
            }
         </select>
      </div>
      </>
   );
}

export default DropdownCategory;
