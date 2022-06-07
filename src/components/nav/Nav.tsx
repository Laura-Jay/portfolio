import "./nav.css"
import { AiFillHome } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { HiDocumentText } from "react-icons/hi"
import { GrProjects } from "react-icons/gr"
import { GrContact } from "react-icons/gr"
import { useState } from "react"


export default function Nav(): JSX.Element {
const [activeIcon, setActiveIcon] = useState('#')

    return ( 
        <nav>
            <a href="#" onClick={() => setActiveIcon('#')} className={activeIcon === '#' ? 'active' : ''}><AiFillHome /></a>
            <a href="#about" onClick={() => setActiveIcon('#about')} className={activeIcon === '#' ? 'active' : ''}><FaUserCircle /></a>
            <a href="#experience" onClick={() => setActiveIcon('#experience')} className={activeIcon === '#' ? 'active' : ''}><HiDocumentText /></a>
            <a href="#portfolio" onClick={() => setActiveIcon('#portfolio')} className={activeIcon === '#' ? 'active' : ''}><GrProjects  /></a>
            <a href="#contact" onClick={() => setActiveIcon('#contact')} className={activeIcon === '#' ? 'active' : ''}><GrContact /></a>
        </nav>
    )
}