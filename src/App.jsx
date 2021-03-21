	import styles from './App.module.scss';
	import Navbar from './components/Navbar';
	import Routes from './containers/Routes';

	import { BrowserRouter as Router } from 'react-router-dom';
	import { useEffect, useState } from 'react';
	import { getBreeds, addIsFav } from './services/CatfactsApi.js';


	const App = () => {
		const [breedSearch, setBreedSearch] = useState('');
		const [breedInfomation, setbreedInfomation] = useState([]);
		const [displayedBreeds, setDisplayedBreeds] = useState([]);

	const updateBreeds = async () => {
		const newBreeds = await getBreeds();
		const breedsWithFav = addIsFav(newBreeds);
		setbreedInfomation(breedsWithFav);
	}

	const updateDisplayedBreeds = () => {
		setDisplayedBreeds(breedInfomation.filter(eachBreed => {
		return eachBreed.breed.toLowerCase().includes(breedSearch.toLowerCase());
		}));
	}

	const toggleFav = (breed) => {
		setbreedInfomation(breedInfomation.map(eachBreed => {
		return eachBreed.breed !== breed.breed 
			? eachBreed : { ...eachBreed, isFav: !eachBreed.isFav };
		}));
	}

	useEffect(() => {
		updateBreeds();
	}, []);

	useEffect(() => {
		updateDisplayedBreeds();
	}, [breedSearch, breedInfomation]);


	return (
		<div className={styles.App}>
		<Router>
			<Navbar setSearch={setBreedSearch}/>
			<div className={styles.App__content}>
				<Routes breedInformation={displayedBreeds} toggleFav={toggleFav}/>
			</div>
			</Router>
		</div>
	);
	}

	export default App;
