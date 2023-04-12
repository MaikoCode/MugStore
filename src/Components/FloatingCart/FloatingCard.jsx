import React from 'react'
import CartIcon from './shopping-cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './FloatingCart.css'
import ShoppingCart from '../../Pages/ShopppingCart/ShoppingCart'

export default function FloatingCard() {
  const shoppingCart = useSelector(state => state)
  console.log(shoppingCart) 
  let totalItems = 0;
  for(const item of shoppingCart.cart){
    totalItems += item.quantity
  }
  return (
    <div>
      <Link to="/shoppingCart">
      <div className='floating-cart'>
        <p>Votre panier</p>
        <div className='img-notif-container'>
          <img src={CartIcon} alt="icone cadi" />
          <span className='notif'>{totalItems}</span>
        </div>
      </div>
      </Link>
    </div>
  )
}
