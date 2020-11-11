import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle ,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderProductItem({Item}) {
    return (
        <Card >
            <Link to={`/catalog/${Item.id}`}>
                <CardImg width="100%" src={Item.image} alt={Item.name} />
                <CardImgOverlay>
                    <CardTitle>{Item.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function  Product(props) {
    //const  {Item}=props;
    const catalog =props.Item.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderProductItem Item={item} />  </div>
        );
    });

    return (
        <div className="container">
             <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active> Catalog</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Catalog</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {catalog}
            </div>
        </div>
    );
}

export default  Product;