import Hero from '@/components/sections/home/Hero'
import Services from '@/components/sections/home/Services'
import About from '@/components/sections/home/About'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}