import "./index.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"



function App(): JSX.Element {
  return (
    <div className="container">
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  )
}

export default App;
