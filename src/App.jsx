import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Pricings } from './components/pricing'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*=""]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [datajson, setdatajson] = useState({})
  useEffect(() => {
    setdatajson(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={datajson.Header} />
      <Features data={datajson.Features} />
      <About data={datajson.About} />
      <Services data={datajson.Services} />
      <Pricings data={datajson.Pricings} />
      <Gallery />
      <Testimonials data={datajson.Testimonials} />
      <Team data={datajson.Team} />
      <Contact data={datajson.Contact} />
    </div>
  )
}

export default App
