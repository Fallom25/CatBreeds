import styles from "./Navbar.module.scss";
import Search from "../Search";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch }) => {
    return (
        <>
            <div className = {styles.Navbar}>
                <Link to="/">
                    <h2 className = {styles.Navbar__heading}>Cat Breeds</h2>
                </Link>
                <Link to="/favourites">
                    <FontAwesomeIcon className = {styles.Navbar__icon} icon={faHeart}/>
                </Link>
                <div className = {styles.Navbar__search}>
                    <Search setSearch={setSearch}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;