import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className='home-title'>Bienvenue au <span>Shop</span></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates officia veritatis inventore eius omnis, iure recusandae nisi necessitatibus consectetur.
      </p>
      <img src={imgHomeShop} alt='image de shop' />
    </div>
  )
}
