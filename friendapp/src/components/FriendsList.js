import React from "react";

import Friend from "./Friend"


const FriendsList = props => {
  const friend = props.friendsData.map(friend => {
    return <Friend friend={friend} />
  })

  return (
    <div>
      {
        friend
      }
    </div>
  )
}


export default FriendsList;