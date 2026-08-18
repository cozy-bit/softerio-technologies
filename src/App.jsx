import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import MobileAppsSection from './components/sections/MobileAppsSection'
import OrderFormSection from './components/sections/OrderFormSection'
import ServicesSection from './components/sections/ServicesSection'
import StepsSection from './components/sections/StepsSection'
import WichTasksSection from './components/sections/WichTasksSection'

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ServicesSection />
				<StepsSection />
				<MobileAppsSection />
				<WichTasksSection />
				{/* "Какие задачи поможет решить запуск мобильного приложения" будет тут */}
				<OrderFormSection />
			</main>
			<Footer />
		</>
	)
}

export default App
