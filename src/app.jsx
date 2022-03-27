import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import { Main} from './app-pages/main';
import { Authorization } from './app-pages/authorization';
import { Profile } from './app-pages/profile';
import { Information } from './app-pages/information';
import { Calendar } from './app-pages/calendar';

import { Layout } from './components/Layout';
 
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider} from './hoc/AuthProvider';

function App() {
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}></Route>
                    <Route path="login" element={<Authorization/>}/>;
                    <Route path="profile" element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    }/>
                    <Route path="info" element={<Information />}></Route>
                    <Route path="calendar" element={<Calendar />}></Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;