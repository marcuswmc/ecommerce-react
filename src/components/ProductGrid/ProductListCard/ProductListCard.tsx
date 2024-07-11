import styles from './ProductListCard.module.css'

type ProductListCardType = {
    productName: string;
    image: string;
    description: string;
    oldPrice: number;
    currentPrice: number;
    variantColors: Array<string> // string[]
}


function ProductListCard({ productName, image, description, oldPrice, currentPrice, variantColors }: ProductListCardType) {
    return (
        <div className={styles.productCard}>
            <img src={image} alt="product name" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3 className={styles.name}>{productName}</h3>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.variations}>
                    <h4>Color available:</h4>
                    <div className={styles.colors}>
                    {
                        //Expressoes .map??? 
                        variantColors.map((color) => {
                            return <span style={{ backgroundColor: color }}></span>
                        })
                    }
                    </div>
                </div>

            </div>
            <div className={styles.actions}>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>{oldPrice}</span>
                    <span className={styles.currentPrice}>{currentPrice}</span>
                </div>
                <button>Add to cart</button>
            </div>

        </div>
    )
}

export default ProductListCard