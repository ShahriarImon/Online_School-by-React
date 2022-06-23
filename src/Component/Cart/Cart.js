import React from 'react';
// import course from '../course/course';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const subTotal = props.cart.reduce(((total, course) => total + course.price), 0)
    // console.log(subTotal);
    const total = Number(subTotal.toFixed(2));
    let shipping = 0;
    if (total < 15 && total > 0) {
        shipping = 14.99;
    }
    else if (total < 35 && total > 15) {
        shipping = 4.99;
    }
    else if (total > 35) {
        shipping = 0;
    }

    let tax = Number((total * 0.15).toFixed(2))
    let subGrandTotal = total + shipping + tax;
    const grandTotal = Number(subGrandTotal.toFixed(2));

    return (
        <div>
            <h4>Order summery</h4>
            <div className='cartAddedItem'>
                Items:
                <div  className="cartAddedImg">
                    {props.cart.map(element => <img  src={element.img} alt="" onClick={()=>{props.handleRemoveFromCartBtn(element)}} />)}
                </div>
            </div>
            <p>Items ordered: <strong>{props.cart.length}</strong></p>
            <p>course price: <strong>{total}</strong></p>
            <p>Shipping & Handling: <strong>{shipping}</strong>	</p>
            <p>Estimated Tax(15%): <strong>{tax}</strong></p>
            <p>Order total: <strong>{grandTotal}</strong></p>
        </div>
    );
};

export default Cart;