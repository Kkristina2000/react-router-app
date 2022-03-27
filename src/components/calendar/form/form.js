import React from 'react';

import './form.css';

const Form = ({addEvent}) =>{
    return(
        <form className="formAddEvent" onSubmit={addEvent}>
            <input className="addEvent__input" placeholder="Введите событие" name="text"></input>
            <div className="addEvent__buttons">
                <button className="addEvent__button" type="submit">Ok</button>
                <button className="addEvent__button" >Close</button>
            </div>
        </form>
    );
};
export default Form;