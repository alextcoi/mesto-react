import logo from '../images/logo.svg';

function Header () {
    return (
        <header className="header">
              <div className="logo">
                  <img className="logo__picture" src={logo} alt="Логотип Место"/>
              </div>
        </header>
    );
}

export default Header;