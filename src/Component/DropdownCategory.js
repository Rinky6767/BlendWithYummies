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
<<<<<<< HEAD
         <select id="drop" onChange={clickHandler} value={show} ><option value="None" >None</option>
=======
         <select id="drop" onChange={clickHandler} onClick={clickHandler} ><option value="None" >None</option>
>>>>>>> 85e3492049887236a969aeabceac50f5047a3154
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
