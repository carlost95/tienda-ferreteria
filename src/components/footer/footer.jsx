import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className="footer">
            <ul className='footer__redesSociales'>
                <li>
                    <FontAwesomeIcon className='footer__animacionRedes' icon={faFacebook} size="2x" />
                </li>
                <li>
                    <FontAwesomeIcon className='footer__animacionRedes' icon={faInstagram} size="2x" />
                </li>
                <li>
                    <FontAwesomeIcon className='footer__animacionRedes' icon={faEnvelope} size="2x" />
                </li>
            </ul>
            <div className="footer__autor">
                Copyrigh © By Carlos Anibal Tejada
            </div>
        </div>
    )
}