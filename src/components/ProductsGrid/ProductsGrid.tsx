import style from './ProductsGrid.module.css'
import ProductCard from './ProductCard/ProductCard'

function ProductsGrid() {
  return (
    <div className={style.productsGrid}>
      <div>
        <ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/0/d/1/0d170933-281b-4bd6-9bd9-1057e2253f0c_large/urban-fashion-moment-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        colors='Blue, red, orange'
        />
      </div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/0/d/1/0d170933-281b-4bd6-9bd9-1057e2253f0c_large/urban-fashion-moment-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        colors='Blue, red, orange'
        /></div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/0/d/1/0d170933-281b-4bd6-9bd9-1057e2253f0c_large/urban-fashion-moment-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        colors='Blue, red, orange'
        /></div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/0/d/1/0d170933-281b-4bd6-9bd9-1057e2253f0c_large/urban-fashion-moment-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        colors='Blue, red, orange'
        /></div>  

    </div>

  )
}

export default ProductsGrid