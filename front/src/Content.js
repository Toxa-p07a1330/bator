import {MyContext} from "./Context";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from "./Home";
import Students from "./Students";
import Groups from "./Groups";
import Agreemnets from "./Agreements";
import Classes from "./Classes";
import Tutors from "./Tutors";
import TimeTables from "./TimeTables";
import Admin from "./Admin";
class Content extends React.Component{

    render() {
        let style = {
        }
        return(<div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route path={"/students"} component={Students}/>
                    <Route path={"/groups"} component={Groups}/>
                    <Route path={"/classes"} component={Classes}/>
                    <Route path={"/agreements"} component={Agreemnets}/>
                    <Route path={"/tutors"} component={Tutors}/>
                    <Route path={"/timetable"} component={TimeTables}/>
                    <Route path={"/admin"} component={Admin}/>
                    <Route exact path={""} component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export default Content;
