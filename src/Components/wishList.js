import React from 'react';
import { useStateValue } from '../StateProvider';
function Wish(props) {

    const [{ wishlist }, dispatch] = useStateValue();


    const OnWish = wishlist.map(item => {

        const addToCart = () => {
            dispatch({
                type: 'add-to-cart',
                item: {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                }
            })

        }
        const removeFromCart = () => {
            dispatch({
                type: 'REMOVE_FROM_Wish',
                id: item.id,


            })

        }

        return (

            <div className="products  row mb-2">
                <img className="col-2" src={item.image} alt={item.name} />
                <span className="col-2" >{item.name}</span>
                <span className="col-2">${item.price}</span>
                <button onClick={addToCart} type="button" className="btn  add-from-wish-to-cart col-2 " title="add to Cart">Add to Cart</button>
                <button onClick={removeFromCart} type="button" className="btn  remove-from-cart col-2 " title="Remove">Remove</button>
            </div>


        );


    });

    if (wishlist.length > 0) {

        return (


            <div>

                <div className="row">

                    <div className="col-md-10 ">
                        <h5 className="products-header">Products In Your Wish List</h5>
                        {OnWish}
                    </div>

                </div>


            </div>

        );
    }
    return (<div><h5 className="empty">Empty Wish List</h5></div>);

}



export default Wish;   