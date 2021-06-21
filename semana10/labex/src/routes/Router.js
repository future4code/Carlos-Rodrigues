import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import ListTripPage from '../pages/ListTripPage/ListTripPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route> 

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/admin/trip/list">
                    <AdminHomePage/>
                </Route>
                
                <Route exact path="/admin/trips/create">
                    <CreateTripPage/>
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage/>
                </Route>

                <Route exact path="/trips/list">
                    <ListTripPage/>
                </Route>

                <Route exact path="/trips/application/:id">
                    <ApplicationFormPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route> 
            </Switch>
        </BrowserRouter>
    )
}

export default Router;