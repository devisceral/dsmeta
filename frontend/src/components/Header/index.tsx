import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header(){
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              {/* <a href="https://www.instagram.com/devsuperior.ig" target="__blank">@devsuperior.ig</a> */}
              <span><a href="https://github.com/devisceral" target="__blank"> @devisceral</a></span><span> & <a href="https://www.instagram.com/devsuperior.ig" target="__blank">@devsuperior.ig</a></span>
            </p>
        </div>
    </header>
  )
}

export default Header;