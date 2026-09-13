import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { Hero } from './components/sections/Hero/Hero'
import { Services } from './components/sections/Services/Services'
import { Destinations } from './components/sections/Destinations/Destinations'
import { BookTrip } from './components/sections/BookTrip/BookTrip'
import { Testimonials } from './components/sections/Testimonials/Testimonials'
import { PartnerLogos } from './components/sections/PartnerLogos/PartnerLogos'
import { Newsletter } from './components/sections/Newsletter/Newsletter'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <PartnerLogos />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
