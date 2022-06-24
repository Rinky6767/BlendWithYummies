import './DropDownCat.css';
/*import { useState} from 'react';*/

function DropdownCategory(prop) {
   /*let [show, setShow] = useState("none");*/

   function clickHandler(event) {
         
        /* setShow(event.target.value);*/
         prop.fun(event.target.value);
   }
   console.log("show: "+show);
   return (<>
      <div className='Listconatiner1'>
         <label id="head">Select a Category</label>
         <select id="drop" onClick={clickHandler} onChange={clickHandler} ><option value="None" >None</option>
            {
               prop.cat.map((val, index) => {
                  return <option key={index} value={val.strCategory} className="options" >{val.strCategory}</option>
               })
            }
         </select>
      </div>
      </>
   );
}

export default DropdownCategory;
