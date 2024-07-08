import ImgSlider from '../../assets/carousel 2.png'
import style from './PromotionSlider.module.css'

function PromotionSlider() {

  const { promotionSlider } = style

  return (
    <>
    <div className={promotionSlider} style={{backgroundImage: `url(${ImgSlider})`}}></div>
    </>
  )
}

export default PromotionSlider