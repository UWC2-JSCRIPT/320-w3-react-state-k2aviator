import React, {useState} from 'react';
//import PropTypes from 'prop-types'
import './bnbs.css';
import star from './star.svg';
import heart from './heart.svg';
import ShoppingCart from './ShoppingCart'


const starImage = star
const heartImage = heart


function RenderBnb({bnbs}) {
  const [cartBnbs,setCartBnbs] = useState([])
  const [itemPrice,setItemDetails] = useState('')
  const [heartClass,setHeartClass] = useState('')
  //console.log(bnbs)

  
  //NEXT - figure out how to update the cart in the below function
  // filter and then use set state to filter
  const removeFromCart = (bnb,index)=> {
    console.log("this index", index)
    const newArr = cartBnbs.filter((cartBnb)=>{
        console.log("cartBnb index", bnb.title )
        if (cartBnb.title !== bnb.title){
            return cartBnbs
        }
    })
    setCartBnbs(newArr)
    console.log("new array is ",newArr) 
    console.log("cart bnbs ",cartBnbs) 
  }

  const toggleHeart = ({index}) => {
    let heartImages = document.querySelectorAll(".bnbHeart")
    let thisHeart = heartImages[index]
    console.log("bnb hearts ", thisHeart)
    thisHeart.classList.toggle("toggle");
    console.log("clicked heart; index no. ", index)
    setHeartClass("toggle")
    console.log("heart class", heartClass)
    //let currentHeart = document.querySelector("#0")
  }




  const bnbsList = bnbs.map((bnb,index) =>{ //map itterates over each item in an array
  let bnbTitle = bnb.title
  let bnbHouseType = bnb.houseType
  let bnbImage = bnb.image
  let bnbLocationCity = bnb.location.city
  let bnbLocationCountry = bnb.location.country
  let bnbPaymentCost = "$" +  bnb.payment.cost
  let bnbPrice = bnb.payment.cost
  let bnbPaymentDescription;
  if (bnb.payment.description){
    bnbPaymentDescription = "(" + bnb.payment.description + ")"
  }
  let bnbRatingStars = bnb.rating.stars

  const addToCart = (bnbTitle,bnbPrice,{index})=> {
    setCartBnbs([...cartBnbs,{title: bnbTitle, price: bnbPrice}])
    setItemDetails(bnbPrice)
    toggleHeart({index})
  }


  //display air bnbs on page
  return(

      <div key={index} className='bnbListingBox'>
        <div className="topBox" >
          <img src={bnbImage} className='bnbImage' alt={bnbHouseType}></img>
          <img id={index} src={heartImage} onClick={()=>addToCart(bnbTitle,bnbPrice,{index})} className='bnbHeart' alt="heart"></img>
        </div>
        <div className="bnbHeadline">
          <h4>{bnbLocationCity}, {bnbLocationCountry}</h4>
          <p ><img src={starImage} width="15px" alt="star"></img> {bnbRatingStars}</p> 
        </div>
        <div>      
          <p>{bnbHouseType}: {bnbTitle}</p>
          <p><b>{bnbPaymentCost}</b> night {bnbPaymentDescription}</p>
        </div>
      </div>
  )

  

  });
  return (
    <div className='bnbMainBox'>
      {bnbsList}
      <ShoppingCart  cartBnbs={cartBnbs} removeFromCart={removeFromCart}/>
    </div>
  );
}
//
export default RenderBnb;
