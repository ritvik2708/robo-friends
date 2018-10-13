import React from "react";
const SearchBox=({searchChange})=>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--greean bg-lightest-blue" 
                type="search" 
                placeholder="search here"
                onChange={searchChange}
            />            
        </div>
    );
}
export default SearchBox;