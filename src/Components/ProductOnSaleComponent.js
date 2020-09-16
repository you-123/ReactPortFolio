import React from 'react';
import  {Link}  from   'react-router-dom';
function OnSale( props) {
  const  InStock=props.Item.filter(item=>item.avaliblity==="InStock"  );
  const   Onsale=InStock.map(item=>{
    return  (       
     <div className="col-md-3">
    <div className="product-top">
   <Link to="/"> <img src={item.image} alt={item.name}/></Link>
    <div  className="overlay-right">
      <button type="button" className="btn btn-secondary" title="Quick shope">
        <i className="fa fa-eye" aria-hidden="true"></i>
      </button>
      <button type="button" className="btn btn-secondary" title="Add To Wish List">
        <i className="fa fa-heart-o" aria-hidden="true"></i>
      </button>
      <button type="button" className="btn add-to-cart btn-secondary" title="Add To  Cart">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>
    </div>
    </div>
    <div className="product-bottom  text-center">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half-o" aria-hidden="true"></i>
        <h3>{item.name}</h3>
         <h5>{item.price}</h5>
    </div>
</div>);
  });
  
  
  return (
        <div >
        <section className="on-sale">
        <div className="contaier">
            <div className="title-box">
                <h2>On Sale</h2>
            </div>
            <div className="row">
               { Onsale}
               </div> 
            
        </div>
        </section>
        </div>
    );
}


export default  OnSale;  