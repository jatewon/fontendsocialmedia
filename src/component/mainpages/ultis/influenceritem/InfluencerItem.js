import React from 'react'
import {Link} from "react-router-dom"
import BtnRender from "../influenceritem/BtnRender"
function InfluencerItem({influencer,isAdmin}){
    return (
        <div className="influencer-card">
            {
                isAdmin && <input type ='checkbox' checked={influencer.checked} />
            }
          <img src={influencer.images.url} alt="" />
            <Link to={`/profile/${influencer._id}`}>{influencer.name}</Link>
            <br/>
            <span>{influencer.address}</span>
            <span>{influencer._id}</span>
            <div>
                <BtnRender/>
            </div>
        </div>
    )
}
export default InfluencerItem