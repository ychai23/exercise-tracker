import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class frontPage extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <img src="src/assets/runman" alt="ranman" />
        )
    }
}

export default frontPage