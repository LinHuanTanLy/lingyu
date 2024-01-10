import React from "react";
import TabNavigation from "../pages/TabNavigation";
import Home from "../pages/TabNavigation/Home";
import Group from "../pages/TabNavigation/Group";
import Live from "../pages/TabNavigation/Live";
import Mine from "../pages/TabNavigation/Mine";
import Shop from "../pages/TabNavigation/Shop";
import BottomNav from "../components/BottomNav";
import {HashRouter as Router, Route, Switch} from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <TabNavigation path="/">
                    <BottomNav/>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/live" component={Live}></Route>
                        <Route path="/group" component={Group}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/mine" component={Mine}></Route>
                    </Switch>
                </TabNavigation>
            </Switch>
        </Router>
    )
}
export default AppRouter