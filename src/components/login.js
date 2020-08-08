import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        username: '',
        type: '',
        distance: 0,
        duration: 0,
        calories: 0,
        date: new Date(),
      }
    }

    handleClick() {
        window.location.assign('https://www.strava.com/oauth/authorize?client_id=51546&redirect_uri=http://localhost&response_type=code&scope=activity:read_all');
    }

    //reAuthorize and getActivities
    async getActivities() {
      var accessCode = "";
      await axios.post('https://www.strava.com/oauth/token?client_id=51546&client_secret=8b783975113aadbf78c5662eed67ba8362eefdd7&refresh_token=8e54c6f057250c2d89be5fc93d735bbe64810d74&grant_type=refresh_token')
        .then(response=>{
          accessCode = response.data.access_token;
        }).catch(function (error) {
          console.log(error);
        })
      axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessCode}`)
          .then(response => {
            this.setState({
              username: response.data.username,
              type: response.data.type,
              distance: response.data.distance,
              duration: response.data.moving_time,
              calories: 0,
              date: new Date(response.data.start_date)
            })   
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      }




    render(){
        return(
            <div className="app flex-row align-items-center">
                    <Button
                        onClick={this.handleClick.bind(this)} 
                        variant="primary">Login with Strava
                    </Button>{' '}
                    <Button
                        onClick={this.getActivities.bind(this)} 
                        variant="primary">Get Data
                    </Button>
        </div>
        );
    }
}


export default LoginPage
