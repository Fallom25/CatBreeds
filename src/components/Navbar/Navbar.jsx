import styles from "./Navbar.module.scss";
import Search from "../Search";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch }) => {
    return (
        <>
            <div className = {styles.Navbar}>
                <Link className = {styles.Navbar__link} to="/">
                    <h2 className = {styles.Navbar__heading}>Cat Breeds</h2>
                </Link>
                <Link className = {styles.Navbar__link} to="/favourites">
                    <div className= {styles.Navbar__fav}>
                        <h2 className = {styles.Navbar__heading}>Fav Breeds</h2>
                        <FontAwesomeIcon className = {styles.Navbar__fav_icon} icon={faHeart}/>
                    </div>
                </Link>
                <div className = {styles.Navbar__search}>
                    <Search setSearch={setSearch}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;