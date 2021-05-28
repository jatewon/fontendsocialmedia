import React ,{useContext}from 'react'
import {GobalState} from '../../../GobalState' 
import InfluencerItem  from "../ultis/influenceritem/InfluencerItem"
export default function Influencers() {
  const state = useContext(GobalState)
  const [influencer] = state.influnecerAPI.influencer
  console.log(influencer);
  const [isAdmin] = state.userAPI.isAdmin
    return (
        <div className='influencer'>
           {
             influencer.map(influencer =>{
              return <InfluencerItem key={influencer._id} influencer={influencer}
              isAdmin = {isAdmin}/>
             })
           }
        </div>
    )
}
