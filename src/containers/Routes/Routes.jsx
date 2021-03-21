import {
    Switch,
    Route,
  } from "react-router-dom";

import Dashboard from "../Dashboard";
import Favourites from "../Favourites";
import NotFound from "../NotFound";

const Routes = ({ breedInformation, toggleFav }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard breedInformation={breedInformation} toggleFav={toggleFav} />
            </Route>
            <Route path="/favourites">
                <Favourites breedInformation={breedInformation} toggleFav={toggleFav}/>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;