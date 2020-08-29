import React, { Component } from 'react';
import {PRODUCTS}  from  '../Shared/products';
import Home from './HomeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:PRODUCTS
            
        };
        
    }
   
    render() {
        const HomePage = () => {
            return (
                <Home
                    Item={this.state.products}  
                />
            );
        };
        

        return (
            <div>
                
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to='/home' />
                </Switch>
                
            </div>
        );
    };
}

export default Main;