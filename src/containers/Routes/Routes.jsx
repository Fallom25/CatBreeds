import {
    Routes as Switch,
    Route,
} from "react-router-dom";

import Dashboard from "../Dashboard";
import Favourites from "../Favourites";
import NotFound from "../NotFound";

const Routes = ({ breedInformation, toggleFav }) => {
    return (
        <Switch>
            <Route exact path="/" element={<Dashboard breedInformation={breedInformation} toggleFav={toggleFav} />} />
            <Route path="/favourites" element={<Favourites breedInformation={breedInformation} toggleFav={toggleFav} />} />
            <Route path="*" element={<NotFound />} />
        </Switch>
    )
}

export default Routes;