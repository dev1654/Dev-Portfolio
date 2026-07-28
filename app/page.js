import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import About        from '@/components/About'
import Skills       from '@/components/Skills'
import Experience   from '@/components/Experience'
import Projects     from '@/components/Projects'
import Education    from '@/components/Education'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'
import Particles    from '@/components/Particles'
import KonamiEgg   from '@/components/KonamiEgg'
import ScrollReveal from '@/components/ScrollReveal'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Particles />
      <KonamiEgg />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}