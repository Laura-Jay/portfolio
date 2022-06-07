import {BsLinkedin} from "react-icons/bs"
import { FaGithub } from "react-icons/fa"


export default function HeaderSocials(): JSX.Element {
    return (
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/laura-jay" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Laura-Jay" target="_blank"><FaGithub /></a>
        </div>
    )
}