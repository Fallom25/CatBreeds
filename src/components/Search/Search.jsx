import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import styles from "./Search.module.scss"

const Search = ({ setSearch }) => {
    const [isOpen, setisOpen] = useState(false);
    
    return (
        <div >
            {!isOpen || <input type="text" className={styles.Search__input} onChange={(event)=>setSearch(event.target.value)} placeholder="Search"></input>}
            <FontAwesomeIcon className={styles.Search__icon} icon={faSearch} onClick={()=>setisOpen(!isOpen)}/>
        </div>
    );
}

export default Search;