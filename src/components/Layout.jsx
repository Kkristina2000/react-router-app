import { useAuth } from '../hook/useAuth';
import { Link, Outlet } from 'react-router-dom';

import './Layout.css';

const Layout = () =>{
    const {user} = useAuth();
    if (!user){
        return(
            <>
                <div className='wrapper'>
                    <header className='header'>
                        <div className='header__container'>
                            <a class="header__logo" href="index.html">
                             </a>
                            <nav className='header__navigation'>
                                <Link to="/" className="navigation__link">Главная страница</Link>
                                <Link to="/profile" className="navigation__link">Профиль</Link>               
                                <Link to="/info" className="navigation__link">Информация</Link>
                            </nav>
                        </div>
                    </header>    
                    <Outlet />
                    <footer className="footer"></footer>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className='wrapper'>
                    <header className='header'>
                        <div className='header__container'>
                            <a class="header__logo" href="index.html">
                             </a>
                            <nav className='header__navigation'>
                                <Link to="/" className="navigation__link">Главная страница</Link>
                                <Link to="/profile" className="navigation__link">Профиль {user}</Link>               
                                <Link to="/info" className="navigation__link">Информация</Link>
                                <Link to="/calendar" className="navigation__link">Календарь</Link>
                            </nav>
                        </div>
                    </header>    
                    <Outlet />
                    <footer className="footer"></footer>
                </div>
            </>
        )
        
    }

}
export {Layout};