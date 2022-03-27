import { createContext, useState} from 'react';
export const AuthContext = createContext (null);

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const [password, setPassword]=useState(null)
    const admin='Admin';
    const passwordAdmin=12345678;

    const signin =(newUser,newpassword,cb)=>{
        if (newUser == admin && newpassword==passwordAdmin){
            setUser(newUser);
            cb();
        }
        else(
            alert('Имя пользователя или пароль введены неверно')
        )

    }

    const signout = (cb) =>{
        setUser(null);
        cb();
    }
    const value={user,signin, signout};

    return <AuthContext.Provider value ={value}>
        {children}
        </AuthContext.Provider>
}