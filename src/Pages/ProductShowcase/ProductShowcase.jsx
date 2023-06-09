import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './ProductShowcase.css'
import inventory from '../../data/inventory'
import {useDispatch} from 'react-redux'

export default function ProductShowcase() {
  const [nbMugs, setNbMugs] = useState(1)
  const {id} = useParams()
  console.log(id)
  const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id)
  console.log(productClicked)

  const updateNbMugs = e => {
    setNbMugs(Number(e.target.value))
  }

  const addingInfo = useRef()

  let timerInfo;
  let display = true

  const dispatch = useDispatch()

  const addToCart = e => {
    e.preventDefault()

    const itemsAdded = {
      ...inventory[productClicked],
      quantity: nbMugs
    }

    dispatch({
      type: "ADDITEM",
      payload: itemsAdded
    })

    addingInfo.current.innerText = "Ajouté au panier !"
    if(display){
      display = false
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = ""
        display = true
      }, 500)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo)
    }
  }, [])


  return (
    <div className='showcase'>
      <div className='container-img-showcase'>
        <img src={`/images/${inventory[productClicked].img}.png`} alt="l'image du produit" className='img-showcase' />
      </div>
      <div className='product-infos'>
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix: {inventory[productClicked].price}€</p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité</label>
          <input type="number" id='quantity' value={nbMugs} onChange={updateNbMugs} />
          <button>Ajouter au panier</button>
          <span ref={addingInfo} className='adding-info'></span>
        </form>

      </div>
    </div>
  )
}
