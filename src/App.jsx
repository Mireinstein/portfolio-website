/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"




const App = () => {
    
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </main>
        </>
        
    )
}

export default App