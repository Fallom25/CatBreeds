const API_URL = "https://catfact.ninja/breeds?limit=100";

export const getBreeds = async () => {
    const response = await fetch(`${API_URL}`);
    const breeds = await response.json();
    return breeds.data;
}

export const addIsFav = (breedInformation) => {
    const isFavObj = breedInformation.map(breed =>  {
        return { ...breed, isFav: false}
    });
    return isFavObj;
}
