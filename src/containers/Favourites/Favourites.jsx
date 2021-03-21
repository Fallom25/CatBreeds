import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/Feedback";
import { useEffect, useState } from "react";

const Favourites = ({ breedInformation, toggleFav }) => {
    const [favBreeds, setFavBreeds] = useState(breedInformation.filter(breed => breed.isFav));

    useEffect(() => {
        setFavBreeds(breedInformation.filter(breed => breed.isFav));
    }, [breedInformation])

    const displayFavBreeds = favBreeds.length
        ? <CardList breedInformation={favBreeds} toggleFav={toggleFav}/>
        : <FeedbackPanel title={"No Breeds Favourited"} description={"You have no Favourites, Please have a look through all our breeds and pick out your Favs"}/>
    
    return (
        <>
            {displayFavBreeds}
        </>
    ) 
}


export default Favourites;