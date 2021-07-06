import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import GamePage from '../pages/GamePage/GamePage';
import HomePage from '../pages/HomePage/HomePage';

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path ="/jogar">
                    <GamePage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router