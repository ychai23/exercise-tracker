import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import runman from '/Users/yuanmingchai/mern-excercise-tracker/src/assets/runman.png'
import '/Users/yuanmingchai/mern-excercise-tracker/src/assets/image.css'

class frontPage extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div>
                <h3 className="text-center">Welcome to ExcerTracker</h3>
                <img src={runman}  className="mx-auto d-block max-width: 50%" alt="runman" sizes="(min-width: 36em) 33.3vw, 100vw" />
            </div>
        )
    }
}

export default frontPage