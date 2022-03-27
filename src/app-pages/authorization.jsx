import { useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import './authorization.css';

const Authorization =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const {signin}= useAuth();

    const fromPage = location.state?.from?.pathname || '/';
    
    const handleSubmit =(event) => {
        event.preventDefault();
        const form = event.target;
        const user= form.username.value;
        const password= form.password.value;
        
        signin(user,password, ()=>navigate(fromPage,{replace: true}));
    
    }
    return(
        <div class='form-wrapper'>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form__title">Авторизация</h2>
                <input name="username" type="text"placeholder="Логин" className="form__input"/>
                <input name="password" type="password" placeholder="Пароль" className="form__input"/>
                <button type="submit" className="form__send">Войти</button>
            </form>
        </div>
    );
}

export {Authorization};