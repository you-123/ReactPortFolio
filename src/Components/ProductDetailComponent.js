import React from 'react';
import { CardText, Breadcrumb, BreadcrumbItem, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
function RenderItem({ Item }) {
  let [{ basket }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: 'add-to-cart',
      item: {
        id: Item.id,
        name: Item.name,
        image: Item.image,
        price: Item.price,
      }
    })

  }
  if (Item) {
    return (
      <div className="single-product">
        <div className="row">
          <div className="col-md-6 m-1" >
            <img src={Item.image} alt={Item.name} />
            <CardText>{Item.ProductDescription}</CardText>
          </div>
          <div className="col-md-3 m-1" >
            <h3  >{Item.name}</h3>
            <h6 className="new-arrival" >{Item.condtion}</h6>
            <h6> Avaliblity:{Item.avaliblity}</h6>
            <h6>Brand:{Item.brand}  </h6>
            <h6>Catgory:{Item.catgory}</h6>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <p><b> <h6 className="price"> Price:{Item.price}</h6></b></p>
            <Button onClick={addToCart} type="button" className="btn add-to-cart btn-primary">Add to Cart</Button>
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