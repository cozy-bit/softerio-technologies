import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import StepsSection from './components/sections/StepsSection'
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        {/* остальные секции лендинга добавит команда */}
      </main>
    </>
  )
}

export default App
