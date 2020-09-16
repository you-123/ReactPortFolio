import React from 'react';
import  Example from './CarsolExample';
import Menu  from  './SideMenu';
import  Featured from './FeaturedComponent'
import  OnSale  from  './ProductOnSaleComponent'
function Home( props) {
    return (
        <div >
            <div className="row">
                
                <div className="col-md m-1"> 
                  <Menu  Item={props.Item}/> <Example  />
                 </div> </div>
                 <div className="row" >
                 < Featured Item={props.Item} />
                 </div>
                 <div className="row">
                 < OnSale Item={props.Item} /> 
                 </div>
            </div>
        
    );
}



export default Home;   