import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import StepsSection from './components/sections/StepsSection'
import OrderFormSection from './components/sections/OrderFormSection'
  
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        {/* "Какие задачи поможет решить запуск мобильного приложения" будет тут */}
        <OrderFormSection />
      </main>
      <Footer />
    </>
  )
}

export default App