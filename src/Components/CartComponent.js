import React from 'react';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from './reducer';
function Cart(props) {

  const [{ basket }, dispatch] = useStateValue();


  const OnCart = basket.map(item => {
    const removeFromCart = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: item.id,


      })

    }

    
    return (

      <div className="products  row mb-2">
        <div className="col-3"><img src={item.image} alt={item.name} /></div>
        <span className="col-3" >{item.name}</span>
        <span className="col-3">${item.price}</span>
        <button onClick={removeFromCart} type="button" className="btn  remove-from-cart col-2 " title="Remove">Remove</button>
      </div>


    );


  });

  if (basket.length > 0) {

    return (


      <div >

        <div className="row">

          <div className="col-md-6 ">
            <h5 className="products-header">PRODUCTS In The CART</h5>
            {OnCart}
          </div>
          <div className="col-md-6  ">
            <div className="basketTotalContainer">
              <h4 className="basketTotalTitle">Basket Total:({basket.length}-Item/s)</h4>
              <h4 className="basketTotal"> ${getBasketTotal(basket)}.00</h4>
              <button onClick type="button" className="btn cheackOut " title="cheackOut">TocheakOut</button>
            </div> </div>
        </div>


      </div>

    );
  }
  return (<div><h5 className="empty">Empty Cart</h5></div>);

}



export default Cart;   