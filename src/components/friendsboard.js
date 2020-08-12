import React from "react";
import Table from '@material-ui/core/Table';
import axios from 'axios';

class Leaderboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //later retreive from database
        usersData: [],
        usersDataT: [
            {
                username: 'heloo',
                type: 'Biking',
                distance: 100,
                duration: 0,
                calories: 19,
                date: new Date(),
            },
            {
                username: 'heloo',
                type: 'Run',
                distance: 100,
                duration: 0,
                calories: 19,
                date: new Date(),
            },
            {
                username: 'heloo',
                type: 'Run',
                distance: 200,
                duration: 0,
                calories: 19,
                date: new Date(),
            },
            {
                username: 'heloo',
                type: 'Biking',
                distance: 60,
                duration: 0,
                calories: 19,
                date: new Date(),
            },
            {
                username: 'wow',
                type: 'Swimming',
                distance: 10,
                calories: 200,
                duration: 0,
                date: new Date(),
            }
        ],
        current: new Date(),
      };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
          .then(response => {
            this.setState({ usersData: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    render(){
        return(
            <div>
                <h3>Friends Leading Board</h3>
                <h4>Running Leading Board</h4>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Type</th>
                        <th>Distance</th>
                        <th>Duration</th>
                        <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersDataT
                        .filter(user => (user.type == 'Run' && user.date.getTime() == this.state.current.getTime()))
                        .sort(function(a, b) {
                            return a.distance - b.distance;
                        })
                        .map( user => {
                            return (
                            <tr id={user.type}>
                                <td>{user.username}</td>
                                <td>{user.type}</td>
                                <td>{user.distance}</td>
                                <td>{user.duration}</td>
                                <td>{user.calories}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>

                <h4>Biking Leading Board</h4>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Type</th>
                        <th>Distance</th>
                        <th>Duration</th>
                        <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersDataT
                        .filter(user => (user.type == 'Biking' && user.date.getTime() == this.state.current.getTime()))
                        .sort(function(a, b) {
                            return a.distance - b.distance;
                        })
                        .map( user => {
                            return (
                            <tr id={user.type}>
                                <td>{user.username}</td>
                                <td>{user.type}</td>
                                <td>{user.distance}</td>
                                <td>{user.duration}</td>
                                <td>{user.calories}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>

                <h4>Swimming Leading Board</h4>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Type</th>
                        <th>Distance</th>
                        <th>Duration</th>
                        <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersDataT
                        .filter(user => (user.type == 'Swimming' && user.date.getTime() == this.state.current.getTime()))
                        .sort(function(a, b) {
                            return a.distance - b.distance;
                        })
                        .map( user => {
                            return (
                            <tr id={user.type}>
                                <td>{user.username}</td>
                                <td>{user.type}</td>
                                <td>{user.distance}</td>
                                <td>{user.duration}</td>
                                <td>{user.calories}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
        )
    }
}


export default Leaderboard



