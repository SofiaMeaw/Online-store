import React from 'react'
import "./Product.css"

export default function Product(props) {
  return <a href={props.link} className="product">
    <div className="product-title">{props.title}</div>

    <div className="product-card">
      <img className="product-image" src={props.img} alt={props.title}/>

      <div className="product-description">
        {props.description}
      </div>
    </div>
  </a>
}