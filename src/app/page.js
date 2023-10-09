import About from "./components/About";
import Contact from "./components/Contact";
import HeroMain from "./components/HeroMain";
import Projects from "./components/Projects";
import Skills from "./components/Skills";




export default function Home() {
  return (
    <div>
      <HeroMain />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
