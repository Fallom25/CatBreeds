import {
    Switch,
    Route,
  } from "react-router-dom";

import Dashboard from "../Dashboard";
import Favourites from "../Favourites";
import NotFound from "../NotFound";

const Routes = ({ breedInfomation, toggleFav }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard breedInfomation={breedInfomation} toggleFav={toggleFav} />
            </Route>
            <Route path="/favourites">
                <Favourites breedInfomation={breedInfomation} toggleFav={toggleFav}/>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;