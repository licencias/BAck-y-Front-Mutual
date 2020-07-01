import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ME from './formularios/ME'
import SM from './formularios/SM'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/ME" component={ME} />
            <Route exact path="/SM" component={SM} />
        </Switch>
    );
}

export default Routes;