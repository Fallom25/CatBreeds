import BreedCard from "../BreedCard";

const CardList = ( {breedInformation, toggleFav} ) => {

    return (
        <>
            {breedInformation.map( (breed, index) => 
                <div>
                    <BreedCard key={index} breedInformation={breed} toggleFav={toggleFav} />
                </div>
            )}
        </>
    )
}

export default CardList;


