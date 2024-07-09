import style from './ProductCard.module.css'

type ProductCardType = {
  productName: string 
  link: string
  image: string 
  category: string
  oldPrice: string 
  currentPrice: string
  colorSelector: string[]

}

function ProductCard(props: ProductCardType){
  const { productName, link, image, category, oldPrice, currentPrice, colorSelector } = props
  const { productCard, productInfo, productPrice, colorSelectorWrapper } = style

  return(
    <div className={productCard}>
      <img src={image} alt="Product Image" />
      <div className={productInfo}>
      <h2>{productName}</h2>
      <a href={link}>{category}</a>
      <div className={productPrice}>
      <p>€{oldPrice}</p>
      {currentPrice && <p>€{currentPrice}</p>}
      </div>
      <div className={colorSelectorWrapper}>
        {colorSelector.map((color) => {
          return (
            <span style={{backgroundColor: color}}></span>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default ProductCard