import React from 'react';
import {  CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderItem({ Item }) {
    if (Item) {
      return (
        <div>
          <div className="row">
        <div className="col-md-6 m-1" >
            <img src={Item.image} alt={Item.name} /> 
              <CardText>{Item.ProductDescription}</CardText>
           </div>
          <div className="col-md-3 m-1" >
           <h6 >{Item.condtion}</h6> 
            <h6> Price:{Item.price}</h6>
            <h6> Avaliblity:{Item.avaliblity}</h6>  
              <h6>Brand:{Item.brand}  </h6>         
               <h6>Catgory:{Item.catgory}</h6> 
           </div>
           </div>
           </div>
      );
    }
  }
function ProductInfo(props) {
    if (props.Item) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/catalog">Catalog</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.Item.name}</BreadcrumbItem>
              </Breadcrumb>
              <h2>{props.Item.name}</h2>
              <hr />
            </div>
          </div>
    
            < RenderItem Item={props.Item} />
            
          </div>
        );
    }
    return <div />;
  }
  export default ProductInfo;