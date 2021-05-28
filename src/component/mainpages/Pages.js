import React from 'react'
import {Switch,Route, BrowserRouter} from "react-router-dom"
import Influener from "../mainpages/influencer/Influencers"
import Booking from "../mainpages/booking/Booking"
import Login from "../mainpages/auth/Login"
import Register from "../mainpages/auth/Register"
import Profile from "../mainpages/proflie/Profile"
import Notfound from "../mainpages/ultis/Not-found/Notfound"
export default function Pages() {
    return (
        <Switch>
            <Route path="/" exact component={Influener}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/booking" exact component={Booking}></Route>
            <Route path="/profile/:id" exact component ={Profile}></Route>
            <Route path="*" exact component={Notfound}></Route>
        </Switch>
    )
}
