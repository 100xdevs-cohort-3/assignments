import React,{createContext, useState, useContext} from 'react'
import Home from "./Home"
import AppBar from './AppBar';
import Login from './Login';


export const AuthenticationContext = createContext(undefined);

export default function AuthSystem(){
  const [useContextApi, setUseContextApi] = useState(false);
  const [username, setUsername] = useState(" ");
  const [isLogIn, setIsLogIn] = useState(false);


  const login = (newUsername) =>{
    setUsername(newUsername);
    setIsLogIn(true);
  }

  const logout = () =>{
    setUsername('');
    setIsLogIn(false);
  }

  const contextValue = useContextApi ? { username, isLogIn, login, logout} : undefined;

return (

  <AuthenticationContext.Provider value={contextValue}>
    
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <AppBar
       username ={username}
       isLogIn={isLogIn}
       logout= {logout}
      />

      <div style={{
        diplay: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '1rem',
        backgroundColor: '#f0f0f0'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        
        <input type="checkbox"  id='use-context-api' checked={useContextApi} onChange={(e) => setUseContextApi(e.target.checked)} />
        <label htmlFor="use-context-api">
          Use Context API: {useContextApi ? 'on' : 'off'}
        </label>
        </div>
      </div>
      <main style={{flex: 1, padding: '1rem'}}> {isLogIn ? (
        <Home/>
      ) : (
        <Login onLogin={login}/>
      )} </main>
    </div>
  </AuthenticationContext.Provider>
)

}


