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
    componentDidMount() {
      axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.username),
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
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
            console.log(response.data[0])
            this.setState({
              username: response.data[0].athlete.id,
              type: response.data[0].type,
              distance: response.data[0].distance,
              duration: response.data[0].moving_time,
              calories: 0,
              date: new Date(response.data[0].start_date)
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      onUserSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
      }

      onSubmit(e) {
        e.preventDefault();
    
        const exercise = {
          username: this.state.username,
          description: this.state.type,
          duration: this.state.duration,
          date: this.state.date
        }
    
        console.log(exercise);
    
        axios.post('http://localhost:5000/exercises/add', exercise)
          .then(res => console.log(res.data));

        window.location = '/';
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
                    </Button>{' '}
                    <Button
                        onClick={this.onUserSubmit.bind(this)} 
                        variant="primary">Create Account
                    </Button>{' '}
                    <Button
                        onClick={this.onSubmit.bind(this)} 
                        variant="primary">Sumbit Exercise
                    </Button>
        </div>
        );
    }
}


export default LoginPage
