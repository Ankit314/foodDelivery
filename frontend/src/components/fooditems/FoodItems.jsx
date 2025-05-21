import React, { useContext  } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItems = ({id, name ,price,descriptions,image}) => {
     
    const {cartItems,addToCart,removeFormCart,url}=useContext(StoreContext);


  return (
    <div>
        <div className="fooditems">
            <div className="food-items-img-cointainer">
                <img src={url+"/images/"+image} alt="" className="food-items-image" />
                {
                    !cartItems[id]?  <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>:<div className='food-item-counter'>
                        <img onClick={()=>removeFormCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }

            </div>
            
            <div className="food-items-info">
                <div className="food-iems-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-items-descriptions">
                    {descriptions}
                </p>
                <p className="food-items-price">
                    ${price}
                </p>
            </div>
        </div>
    </div>
  )
}

export default FoodItems