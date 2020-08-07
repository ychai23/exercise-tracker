import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
    }
    handleClick() {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('https://www.strava.com/oauth/authorize?client_id=51546&redirect_uri=http://localhost&response_type=code&scope=activity:read_all');
    }

    getActivities() {
        axios.get('https://www.strava.com/api/v3/athlete/activities?access_token=8ca50262bf679fb233545da396dcc105a89c9b84')
          .then(response => {
            // this.setState({
            //   username: response.data.username,
            //   description: response.data.description,
            //   duration: response.data.duration,
            //   date: new Date(response.data.date)
            // })   
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
    
        // axios.get('http://localhost:5000/users/')
        //   .then(response => {
        //     if (response.data.length > 0) {
        //       this.setState({
        //         users: response.data.map(user => user.username),
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
    
      }


    // reAuthorize(){
    //     const auth_link = "https://www.strava.com/oauth/token"
    //     fetch(auth_link,{
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },

    //         body: JSON.stringify({
    //             client_id: '51546',
    //             client_secret: '8b783975113aadbf78c5662eed67ba8362eefdd7',
    //             refresh_token: "8e54c6f057250c2d89be5fc93d735bbe64810d74",
    //             grant_type: 'refresh_token'
    //         })
    //     })
    //     .then(res => getActivites(res))
    // }

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
