import React, {createContext, useState, useEffect} from 'react'
import InflunecerAPI from "./api/InflunecerAPI"
import UserAPI from "./api/UserAPI"
import axios from 'axios'
export const GobalState= createContext()

export const DataProvider = ({children})=>{
    const [token,setToken] =useState(false)
    
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])
    const state ={
        token: [token,setToken],
         influnecerAPI:InflunecerAPI(),
         userAPI: UserAPI(token),

    }
    return(
        <GobalState.Provider value={state}>
            {children}
        </GobalState.Provider>
    )
}
