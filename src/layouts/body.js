import React from 'react'
import showcase from './img/food-1.jpg'
// import { Link } from 'react-router-dom'

 function body() {
  return (
 <div className='showcase'>
    
        <div className='placeholder'>
 <p>   START YOUR ORDER <button>DELIVERY</button> <span className='or'>or</span> <button>CARRYOUT</button></p>    
        </div>
        
        <div>
        <img src={showcase} alt=''/>
        </div>

    <div className='info'>
        <div>
        <h1>WHAT WE DO</h1>
        welcome to salty delight website where you can not just any food but the best food and dishes in yola 
        ranging from locally made food to foreign foods 
        thats just not it ohhhh and everything baking welcome to salty delight website where you can not just any food but the best food and dishes in yola 
        ranging from locally made food to foreign foods 
        thats just not it ohhhh and everything baking
        </div>
        
        <div>
        <h1>DELIVERY</h1>
        CURRENT AVERAGE DELIVERY TIME <span className='deliveryT1'>2</span> <span className='deliveryT2'>5</span> mins 
        </div>
    </div>
</div>

  )
}

export default body