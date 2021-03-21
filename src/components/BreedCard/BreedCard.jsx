import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./BreedCard.module.scss";


const BreedCard = ({ breedInformation, toggleFav }) => {
    const breed = breedInformation;
    const favIcon = breed.isFav ? faHeart : faOpenHeart;

    const handletoggleFav = (event) => {
        event.stopPropagation(); 
        toggleFav(breedInformation)
    }
    return (
        <div className = {styles.BreedCard}>
            <div className = {styles.BreedCard__Breed}>
                <h3 className = {styles.cardBack__Breed_Name}>{breed.breed}</h3>
                <div>
                    <FontAwesomeIcon className = {styles.cardBack__Breed_Icon} icon={favIcon} onClick = {handletoggleFav}/>
                </div>
            </div>
            <h5 className = {styles.BreedCard__text_heading}>Country</h5>
            <p className = {styles.BreedCard__text_info}>{breed.country}</p>
            <h5 className = {styles.BreedCard__text_heading}>Origin</h5>
            <p className = {styles.BreedCard__text_info}>{breed.origin}</p>
            <h5 className = {styles.BreedCard__text_heading}>Coat</h5>
            <p className = {styles.BreedCard__text_info}>{breed.coat}</p>
            <h5 className = {styles.BreedCard__text_heading}>Pattern</h5>
            <p className = {styles.BreedCard__text_info}>{breed.pattern}</p>
        </div>
    );
}

export default BreedCard;