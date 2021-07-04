import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }


    render(){
        return (
            <div>
            <main>
                <h1>
                    <center>test main</center>
                </h1>
            </main></div>
        )
    }
}

export default Main