import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems, food_list, removeFormCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate=useNavigate();


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totals</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((items, index) => {
            if (cartItems[items._id] > 0) {
              return (
                <div>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+items.image} alt="" />
                    <p>{items.name}</p>
                    <p>${items.price}</p>
                    <p>{cartItems[items._id]}</p>
                    <p>${items.price * cartItems[items._id]}</p>
                    <p onClick={() => removeFormCart(items._id)} className='cross'>X</p>


                  </div>
                  <hr />
                </div>

              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Delivery fees</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>

          </div>
          <button onClick={()=>navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-prommo-code">
          <div>
            <p>If you have promo code inter it here </p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart