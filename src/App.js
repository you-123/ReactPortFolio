import React, { Component } from 'react';
import Main from  './Components/MainComponent';
import {  BrowserRouter } from 'react-router-dom';
import './App.css';
class App extends Component {
//  constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
// }

// callAPI() {
//     fetch("http://localhost:9000/catalogs")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse:(res) }));
// }

// componentWillMount() {Serverres={this.state.apiResponse}
//     this.callAPI();
// } 
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Main  />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
