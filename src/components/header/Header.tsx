import "./header.css"
import Actions from "./Actions"
import HeaderSocials from "./HeaderSocials"
import ME from "../../images/me.jpg"

export default function Header(): JSX.Element {

    return (
        <header>
            <div className="header--container">
                <h5>Hello I'm</h5>
                <h1>Laura Jamieson</h1>
                <h5 className="text-light">Fullstack Developer</h5> 
                <Actions />
                <HeaderSocials />

                <div className="profile">
                    <img src={ME} alt="profile picture" />
                </div>

                <a href="#contact" className="scroll-down">Scroll Down</a>

            </div>
        </header>
    )
}