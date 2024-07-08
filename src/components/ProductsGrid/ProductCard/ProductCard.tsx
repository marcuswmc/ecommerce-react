import style from './ProductCard.module.css'

function ProductCard(props){
  const { producName, link, image, category, price, promotionPrice} = props
  const { productCard, productInfo, productPrice, colorSelectorWrapper } = style

  return(
    <div className={productCard}>
      <img src={image} alt="Product Image" />
      <div className={productInfo}>
      <h2>{producName}</h2>
      <a href={link}>{category}</a>
      <div className={productPrice}>
      <p>€{price}</p>
      {promotionPrice ? <p>€{promotionPrice}</p> : null}
      </div>
      <div className={colorSelectorWrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </div>
  )
}

export default ProductCard