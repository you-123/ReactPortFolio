import React from 'react';
import { Card, CardImg} from 'reactstrap';

function Featured(props) {

     const features= props.Item.filter(item => item.featured===true);
      const f =features.map(item => {
        return (
                <div  key={item.id} className="col-md-4 m-1 featured-categories">
                <RenderFeatured Item={item} />
                </div>
                
        );
    });
       
    return (
         <div>
        <div className="container">
             <div className="title-box1">
            <h2>Featured</h2>
            </div>
        <div className="row">
                 {f}
                 </div>
                  </div>
                  </div>
    );
}
function RenderFeatured({Item}) {
    return (
        <Card >
    <CardImg width="100%" src={Item.image} alt={Item.name} />
        </Card>
        
    );
}

export default Featured;  