import About from "./components/About";
import HeroMain from "./components/HeroMain";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroMain />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
