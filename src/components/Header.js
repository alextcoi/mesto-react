import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header ({userEmail, onSignOut}) {
    const location = useLocation()

    return (
        <header className="header">
              <div className="logo">
                  <img className="logo__picture" src={logo} alt="Логотип Место"/>
              </div>
              <div className="header__links">
                    <p className="header__link header__link_email">
                        {
                            location.pathname === "/"
                            ? userEmail
                            : ""
                        }
                    </p>
                    <Link to={
                            location.pathname === "/sign-up"
                            ? "/sign-in"
                            : location.pathname === "/sign-in"
                            ? "/sign-up"
                            : "/sign-in"
                        }
                        className="header__link header__link_logout"
                        onClick={location.pathname === "/" ? onSignOut : () => {}}
                    >
                        {
                            location.pathname === "/sign-up"
                            ? "Вход"
                            : location.pathname === "/sign-in"
                            ? "Регистрация"
                            : "Выйти"
                        }
                    </Link>
              </div>
        </header>
    );
}

export default Header;