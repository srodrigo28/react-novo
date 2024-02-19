import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header} from "./../components/Header"

import { Login } from "../pages/Login"
import { Page404 } from "../pages/Page404"

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route  path="*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}