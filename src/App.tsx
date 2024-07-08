import './App.css'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'

import SectionTitle from './components/SectionTitle/SectionTitle'
import CategoriesGrid from './components/CategoryGrid/CategoriesGrid'
import ProductsGrid from './components/ProductsGrid/ProductsGrid'

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
      <SectionTitle title={"Bestseller Products"}  subtitle={'Problems trying to resolve the conflict between '} tagline={'Featured Products'} />
      <ProductsGrid />
      </Section>
    </>
  )
}
 
export default App
