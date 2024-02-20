import { Link } from "react-router-dom";
import { Nav } from "./style";
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { useSelector} from "react-redux";

export function Header(){
    const botaoClicado = useSelector( state => state.botaoClicado );
    return(
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUserAlt size={24} />
            </Link>
            <Link to="/asdf">
                <FaSignInAlt size={24} />
            </Link>
            <p>{ botaoClicado ? 'Clicado' : 'Não Clicado' }</p>
        </Nav>
    )
}