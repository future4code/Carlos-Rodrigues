import React from 'react';
import AdminHomePage from './components/AdminHomePage/AdminHomePage';
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';
import HomePage from './components/HomePage/HomePage';
import ListTrip from './components/ListTrip/ListTrip';
import LoginPage from './components/LoginPage/LoginPage';
import TripDetailsPage from './components/TripDetailsPage/styled';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <LoginPage/>
      <ListTrip/>
      <ApplicationFormPage/>
      <AdminHomePage/>
      <CreateTripPage/>
      <TripDetailsPage/>
    </div>
  );
}

export default App;
