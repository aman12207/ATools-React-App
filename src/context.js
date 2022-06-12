import React, { createContext, useContext,useState } from "react";
import axios from 'axios'

const AppContext = createContext();

//try to login with : 
//"email": "eve.holt@reqres.in",
//"password": "cityslicka"
const AppProvider = ({children}) =>{
  const URL = "https://reqres.in/api/login";
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLogin,setLogin] = useState(false);
  const handleSubmit = (e) =>{ 
    e.preventDefault();
      axios.post(URL,{
        "email": email,
        "password": password
      }).then((response)=>{
        setLogin(true);
        // console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
  }
  return <AppContext.Provider value={{setPassword,setEmail,handleSubmit,isLogin,setLogin}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}

export {AppContext,AppProvider}