import './DropDownCat.css';
function DropdownCategory(prop) {
   let i= sessionStorage.getItem("catname");
   function clickHandler(event) {
      if (i!==undefined || i!==null){
         sessionStorage.removeItem("catname");
      }
      sessionStorage.setItem("catname",event.target.value);
      prop.fun(event.target.value);
   }
   return (<>
         <div className='Listconatiner1'>
            <label id="head">Select a Category</label>
            <select id="drop"  onChange={clickHandler}>
               <option value="None" >None</option>
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
