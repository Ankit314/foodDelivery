import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItems from '../fooditems/FoodItems'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='foodDiplay' id='foodDiplay'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){

                
                return(
                    <div>
                        <FoodItems key={index} id={item._id} name={item.name} descriptions={item.description} price={item.price} image={item.image}/>
                    </div>
                )
            }

            })}
        </div>
    </div>
  )
}

export default FoodDisplay