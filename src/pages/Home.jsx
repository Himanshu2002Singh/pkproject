import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import PracticeAreas from '../components/PracticeAreas'
import Insights from '../components/Insights'
import TrustedBy from '../components/TrustedBy'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <PracticeAreas />
      <Insights />
      <TrustedBy />
      <CTASection />
      <Footer />
    </main>
  )
}
