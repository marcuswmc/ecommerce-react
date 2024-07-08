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
        />
      </div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/b/f/1/bf152bf7-6f62-4f16-9c8e-79419540f005_large/urban-fashion-pose-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        /></div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/e/9/7/e97054fc-dcb8-4161-8acb-0600e44709fb_large/elegant-fashion-pose-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        /></div>
      <div><ProductCard
        producName='Product Name'
        link='#cenas'
        image='https://images.stockcake.com/public/d/5/d/d5dd7b46-c174-4efa-bfd5-52e6e9c195ee_large/elegant-fashion-pose-stockcake.jpg'
        category='Women'
        price='16.90'
        promotionPrice='6.90'
        /></div>  

    </div>

  )
}

export default ProductsGrid