import style from './MainSlider.module.css'
import Fslider from '../../assets/carousel 1.png'

function MainSlider() {
  return (
    <>
      <div className={style.mainSlider} style={{backgroundImage: `url(${Fslider})`}}></div>
    </>
  )
}

export default MainSlider