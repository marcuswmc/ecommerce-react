import style from './ProductsGrid.module.css'
import ProductCard from './ProductCard/ProductCard'

const products = [
  {
  "image": "https://images.stockcake.com/public/0/d/1/0d170933-281b-4bd6-9bd9-1057e2253f0c_large/urban-fashion-moment-stockcake.jpg",
  "productName": "Product Name",
  "link": "#cenas",
  "category": "Women",
  "oldPrice": "16.90",
  "currentPrice": "6.90",
  "colors": [
    "#23a6f0",
    "#23856D", 
    "#E77C40",
    "#252B42"
  ]
},
{
  "image": "https://images.stockcake.com/public/b/f/1/bf152bf7-6f62-4f16-9c8e-79419540f005_large/urban-fashion-pose-stockcake.jpg",
  "productName": "Casual Wear",
  "link": "#casualwear",
  "category": "Men",
  "oldPrice": "25.00",
  "currentPrice": "18.00",
  "colors": [
    "#FAFAFA",
    "#000000",
    "#FF5733",
    "#C70039"
  ]
},
{
  "image": "https://images.stockcake.com/public/e/9/7/e97054fc-dcb8-4161-8acb-0600e44709fb_large/elegant-fashion-pose-stockcake.jpg",
  "productName": "Summer Dress",
  "link": "#summerdress",
  "category": "Women",
  "oldPrice": "30.00",
  "currentPrice": "20.00",
  "colors": [
    "#FF6347",
    "#FFD700",
    "#ADFF2F",
    "#40E0D0"
  ]
},
{
  "image": "https://images.stockcake.com/public/d/5/d/d5dd7b46-c174-4efa-bfd5-52e6e9c195ee_large/elegant-fashion-pose-stockcake.jpg",
  "productName": "Sportswear",
  "link": "#sportswear",
  "category": "Unisex",
  "oldPrice": "50.00",
  "currentPrice": "35.00",
  "colors": [
    "#1E90FF",
    "#32CD32",
    "#FFD700",
    "#FF4500"
  ]
}
]

function ProductsGrid() {
  return (
    <div className={style.productsGrid}>
        {products.map((product) => {
          return (
            <ProductCard
            productName={product.productName}
            link={product.link}
            image={product.image}
            category={product.category}
            oldPrice={product.oldPrice}
            currentPrice={product.currentPrice}
            colorSelector={product.colors}
    
            />
          )
        })}
    </div>

  )
}

export default ProductsGrid