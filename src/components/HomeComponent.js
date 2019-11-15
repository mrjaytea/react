import React, { Component } from 'react';
import {Badge} from 'reactstrap';
import baseURL from '../baseURL';
import architecture from '../assests/architecture.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="background">
                <div className="container home">
                    <h1 style={{textAlign: 'center'}}>Welcome to my Page!</h1>
                    <hr/>            
                    <h3 className="mt-2 mb-3">I would like to invite you to check out all the pages <br/>(The Grammar Component is for my own study :) )</h3>
                    <h4 className="mt-2 mb-3">This page is created with:</h4>
                    <ul className="mt-2 mb-3">
                        <li>
                            <h4><Badge color="primary">ReactJS</Badge></h4>
                        </li>
                        <li>
                            <h5><Badge color="info">ReactStrap</Badge></h5>
                        </li>
                        <li>
                            <h5><Badge color="success">Font-Awesome</Badge></h5>
                        </li>
                        <li>
                            <h5><Badge color="secondary">Redux</Badge></h5>
                        </li>
                    </ul>
                    <h5 className="mt-2 mb-3">PlEASE also check my other sites/apps (built with different methods)</h5>
                    <br/>
                    <h2>Blueprint of this page: </h2>
                    <hr/>
                    <img src={architecture} width="100%" />
                </div>
            </div>
        );
    }
}

export default Home;