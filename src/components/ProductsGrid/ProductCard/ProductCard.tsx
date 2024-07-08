import style from './ProductCard.module.css'

function ProductCard(props){
  const { producName, link, image, category, price, promotionPrice} = props
  const { productCard } = style
  const { productInfo } = style
  const { productPrice } = style

  return(
    <div className={productCard}>
      <img src={image} alt="Product Image" />
      <div className={productInfo}>
      <h2>{producName}</h2>
      <a href={link}>{category}</a>
      <section className={productPrice}>
      <p>€{price}</p>
      {promotionPrice ? <p>€{promotionPrice}</p> : null}
      </section>
     
      </div>

    </div>
  )
}

export default ProductCard