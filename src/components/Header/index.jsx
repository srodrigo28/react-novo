import { Nav } from "./style";
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';

export function Header(){
    return(
        <Nav>
            <a href="http://">
                <FaHome size={24} />
            </a>
            <a href="http://">
                <FaUserAlt size={24} />
            </a>
            <a href="http://">
                <FaSignInAlt size={24} />
            </a>
        </Nav>
    )
}