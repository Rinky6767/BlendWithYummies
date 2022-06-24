import './DropDownCat.css';
import { useState} from 'react';

function DropdownCategory(prop) {
   let [show, setShow] = useState("None");
   let selected = "None";

   function clickHandler(event) {
      if (event.target.value !== "None" && event.target.value !== selected) {
         selected = event.target.value;
         setShow(event.target.value);
         prop.fun(show);
      }
   }
   return (<>
      <div className='Listconatiner1'>
         <label id="head">Select a Category</label>
         <select id="drop" onChange={clickHandler} onClick={clickHandler} ><option value="None" >None</option>
            {
               prop.cat.map((val, index) => {
                  return <option key={index} value={val.strCategory} className="options">{val.strCategory}</option>
               })
            }
         </select>
      </div>
      </>
   );
}

export default DropdownCategory;
