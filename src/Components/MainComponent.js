import React, { Component } from 'react';
import {PRODUCTS}  from  '../Shared/products';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import  Product  from './ProductCatalog';
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
                 <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/catalog' render={() => <Product Item={this.state.products} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;