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
            <div className = {styles.BreedCard__container}>
                <div className = {styles.BreedCard__Name}>
                    <h3>{breed.breed}</h3>
                    <FontAwesomeIcon className = {styles.BreedCard__Icon} icon={favIcon} onClick = {handletoggleFav}/>
                </div>
                <div className = {styles.BreedCard__Country}>
                    <h4 className = {styles.BreedCard__text_heading}>Country</h4>
                    <p className = {styles.BreedCard__text_info}>{!breed.country ? "N/A" : breed.country}</p>
                </div>
                <div className = {styles.BreedCard__Origin}>
                    <h4 className = {styles.BreedCard__text_heading}>Origin</h4>
                    <p className = {styles.BreedCard__text_info}>{!breed.origin ? "N/A" : breed.origin}</p>
                </div>
                <div className = {styles.BreedCard__Coat}>
                    <h4 className = {styles.BreedCard__text_heading}>Coat</h4>
                    <p className = {styles.BreedCard__text_info}>{!breed.coat ? "N/A" : breed.coat}</p>
                </div>
                <div className = {styles.BreedCard__Pattern}>
                    <h4 className = {styles.BreedCard__text_heading}>Pattern</h4>
                    <p className = {styles.BreedCard__text_info}>{!breed.pattern ? "N/A" : breed.pattern}</p>
                </div>
            </div>
        </div>
    );
}

export default BreedCard;