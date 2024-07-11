import './App.css'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'

import SectionTitle from './components/SectionTitle/SectionTitle'
import CategoriesGrid from './components/CategoryGrid/CategoriesGrid'
import ProductGrid from './components/ProductGrid/ProductGrid'
import PromotionSlider from './components/PromotionSlider/PromotionSlider'
import PostsGrid from './components/PostGrid/PostGrid'

function App() {
  return (
    <>
      <NavBar/>
      <MainSlider />
      <Section>
      <SectionTitle title={"Editor's Pick"}  subtitle={'Problems trying to resolve the conflict between '}  />
      <CategoriesGrid />
      </Section>
      <Section>
      <SectionTitle title={"Bestseller Products"}  subtitle={'Problems trying to resolve the conflict between '} tagline={'Featured Products'}/>
      <ProductGrid />
      </Section>
      <PromotionSlider />
      <Section>
      <SectionTitle title={"Featured Posts"}  subtitle={'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  '} tagline={'Practice Advice'}/>  
      <PostsGrid />
      </Section>
    </>
  )
}
 
export default App
