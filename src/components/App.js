import React, {Component} from 'react';
import {Route, Switch} from 'react-router'
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route render={() => (<div>Miss</div>)}/>
                </Switch>
            </div>
        );
    }
}

export default App;
