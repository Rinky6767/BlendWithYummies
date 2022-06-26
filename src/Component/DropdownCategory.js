import './DropDownCat.css';

function DropdownCategory(prop) {
   function clickHandler(event) {
         prop.fun(event.target.value);
   }
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
