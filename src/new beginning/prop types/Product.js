import React from 'react'
import PropTypes from "prop-types"
import defaultImage from "../images/item-2.jpeg"

const Product = ({image, name, price}) => {
  const url = image && image.url
  return (
    <article className='product'>
      <h4>single product</h4>
      <img src={url || defaultImage} alt="" />
      <h4>{name}</h4>
      <h2>${price || 3.99}</h2>
    </article>
  )
}

Product.propTypes = {
    image:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

// Product.defaultProps = {
//     name: "default name",
//     price:3.99,
//     image : {url:defaultImage}
// }

export default Product