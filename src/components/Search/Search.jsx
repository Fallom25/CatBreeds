import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Search = ({ setSearch }) => {
    const [isOpen, setisOpen] = useState(false);
    
    return (
        <div>
            {!isOpen || <input type="text" onChange={(event)=>setSearch(event.target.value)} placeholder="Search"></input>}
            <FontAwesomeIcon icon={faSearch} onClick={()=>setisOpen(!isOpen)}/>
        </div>
    );
}

export default Search;