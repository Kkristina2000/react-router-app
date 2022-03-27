import React from 'react';
import photo from '../img/admin.jpg';
import { useAuth } from '../hook/useAuth';

import './profile.css';

function Profile (){
    const {user} = useAuth();
    return(
        <section className="profile">
            <h1 className="profile__name">Имя: {user}</h1>
            <img className="profile__photo" src={photo}/>
        </section>         
    )
}
export {Profile};