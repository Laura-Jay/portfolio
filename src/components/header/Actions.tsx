import CV from '../../images/CV.pdf'

export default function Actions(): JSX.Element {

    return (
        <div className="actions">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}