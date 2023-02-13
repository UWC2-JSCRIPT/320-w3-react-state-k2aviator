import React from 'react';
import PropTypes from 'prop-types'
import './bnbs.css';

function ShoppingCart({cartBnbs, removeFromCart}) {
  let subTotal = cartBnbs.map(li => li.price).reduce((sum, val) => sum + val, 0);  
  console.log("current cart - with addition", cartBnbs)
  console.log("add subTotal mapping", subTotal)


  const cartBnbsList = cartBnbs.map((bnb,index)=> {
      let cartTitle = bnb.title
      let cartPrice = bnb.price

      return(
        <div key={index} id={index} className='bnbCartItem'>
          <span>{cartTitle}</span>
          <span>${cartPrice}</span>
          <button onClick={()=>removeFromCart(bnb,index)}>-</button>    
        </div>
      ) 
     })
       
  return(
    
    <div className='bnbCart'>
      <h1 className='yourCart'>Your itinerary</h1>
      <div className='bnbCartTop'>
        {cartBnbsList}
      </div>
      <div className='bnbCartBottom'>
        <span id="price" value={subTotal}>Total $ {subTotal}</span>
      </div>
     
    </div>)


}

ShoppingCart.propTypes = {
  cartBnbs: PropTypes.array,
  removeFromCart: PropTypes.func
}

export default ShoppingCart;
