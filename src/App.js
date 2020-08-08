import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component";
import Leaderboard from "./components/friendsboard";
import LoginPage from "./components/login";
import testboard from "./components/testboard";
import map from "./components/map";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/friendsboard" component={Leaderboard} />
      <Route path="/login" component={LoginPage} />
      <Route path="/testboard" component={testboard} />
      <Route path="/map" component={map} />
      </div>
    </Router>
  );
}

export default App;
