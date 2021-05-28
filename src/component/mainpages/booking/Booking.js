import React, { useContext } from 'react'
import { GobalState } from "../../../GobalState"
import { Link } from 'react-router-dom'
export default function Booking() {
    const state = useContext(GobalState)
  
    const [booking] = state.userAPI.booking
  
    if(booking.length===0) return <h2>khong co san pham</h2>
    return (
        <div>
           {
            booking.map(influencer =>{
            
             })
           }
        </div>
    )
}
