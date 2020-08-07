import React from "react";

class Leaderboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //later retreive from database
        usersData: [
            {
                username: 'heloo',
                type: 'run',
                distance: 100,
                duration: 0,
                calories: 19,
                date: new Date(),
            },
            {
                username: 'wow',
                type: 'biking',
                distance: 100,
                calories: 200,
                duration: 0,
                date: new Date(),
            }
        ]
      };
    }
    render(){
        return(
            <div>
                <h3>Leading Board</h3>
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
                        {this.state.usersData.map( user => {
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



