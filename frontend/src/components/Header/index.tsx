import logo from '../../assets/img/logo2.svg';

import './styles.css';

const Header = () => {
    return (
        <header> 
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/g.u.i_barros/"> @G.u.i_barros</a>
                </p>
            </div>
        </header>
    )
}


export default Header;