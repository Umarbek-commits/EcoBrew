import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
import Research from './components/Research'
import Beneficiary from './components/Beneficiary'
import Solution from './components/Solution'
import Product from './components/Product'
import Competitors from './components/Competitors'
import Advantages from './components/Advantages'
import SocietyHelp from './components/SocietyHelp'
import SDG from './components/SDG'
import BusinessModel from './components/BusinessModel'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import EcoBrewGame from './components/EcoBrewGame'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EcoBrewGame />
        <About />
        <Problem />
        <Research />
        <Beneficiary />
        <Solution />
        <Product />
        <Competitors />
        <Advantages />
        <SocietyHelp />
        <SDG />
        <BusinessModel />
        <Achievements />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
