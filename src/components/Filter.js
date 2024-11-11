import React from "react";

function Filter({onCategoryChange}){

    return(
        <div>
            <label>filter by category:</label>
         <select id="category" onChange={(event)=>onCategoryChange(event.target.value)}>
           <option value="All">All</option>
           <option value="Produce">All</option>
           <option value="Dairy">All</option>
           <option value="Meat">All</option>
           <option value="Bakery">All</option>
         </select>
    
        </div>
    )
}

export default Filter;